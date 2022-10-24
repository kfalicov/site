import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const GraphNode = styled.button`
    position: absolute;
    user-select: none;
    transform: translate(-50%, -50%);
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 0;
    overflow: hidden;
    background: ${(props) => (props.img ? `url('${props.img}')` : 'transparent')};
`;

const Graph = ({ apps, onNodeClick }) => {
    const [nodes, setNodes] = React.useState([]);
    // re-create animation every time apps change
    const handleRender = React.useMemo(() => {
        const simulation = d3
            .forceSimulation()
            .force('x', d3.forceX(0).strength(0.5))
            .force('y', d3.forceY(0).strength(0.5))
            .force('charge', d3.forceManyBody().strength(20))
            .force('collision', d3.forceCollide(100));
        // update state on every frame
        simulation.on('tick', () => {
            setNodes([...simulation.nodes()]);
        });

        // copy apps into simulation
        simulation.nodes(apps.map((app) => ({ id: app.name })));
        // slow down with a small alpha
        simulation.alpha(0.1).restart();

        return (ref) => {
            if (!ref) return;
            console.log('ref');
            setTimeout(() => {
                d3.select(ref)
                    .selectAll('button')
                    .data(simulation.nodes())
                    .call(
                        d3
                            .drag()
                            .on('drag', (e, d) => {
                                simulation.alpha(0.1).restart();
                                d.fx = e.x;
                                d.fy = e.y;
                            })
                            .on('end', (_, d) => {
                                d.fx = null;
                                d.fy = null;
                            })
                    );
            }, 0);
        };
        // return () => simulation.stop();
    }, [apps]);

    const autoResize = React.useCallback((ref) => {
        if (!ref) return;
        const targetwidth = ref.parentElement.getBoundingClientRect().width;
        const currentwidth = ref.getBoundingClientRect().width;
        if (currentwidth > targetwidth) {
            ref.style.transform = `scale(${targetwidth / currentwidth})`;
        }
    }, []);

    return (
        <div style={{ position: 'relative' }} id="network" ref={handleRender}>
            {nodes.map((node, index) => (
                <GraphNode
                    key={node.id}
                    style={{
                        left: node.x,
                        top: node.y,
                    }}
                    img={apps[index].image}
                    onClick={(e) => onNodeClick?.(e, index)}
                >
                    {!apps[index].image && (
                        <div style={{ padding: 8 }} ref={autoResize}>
                            {apps[index].name}
                        </div>
                    )}
                </GraphNode>
            ))}
        </div>
    );
};

export default Graph;
