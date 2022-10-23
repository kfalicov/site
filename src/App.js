import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { AppBar } from './components/AppBar/AppBar';
import { IconButton } from './components/IconButton';
import { Switch } from './Icons';
import { useIntersection } from './components/Utils/useIntersection';
import * as d3 from 'd3';

const DarkThemeButton = styled(IconButton)`
    margin-left: auto;
    position: absolute;
    right: 0;
    top: 0;
`;

const Content = styled.div`
    height: 100vh;
    position: relative;
    padding-top: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const apps = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const App = () => {
    const [theme, setTheme] = React.useState('dark');
    // const [scrollRef, intersection] = useIntersection();

    const [nodes, setNodes] = React.useState([]);

    // re-create animation every time nodes change
    const sim = React.useMemo(() => {
        const simulation = d3
            .forceSimulation()
            .force('x', d3.forceX(0).strength(0.5))
            .force('y', d3.forceY(0).strength(0.5))
            .force('charge', d3.forceManyBody().strength(-50))
            .force('collision', d3.forceCollide(50));
        // update state on every frame
        simulation.on('tick', () => {
            setNodes([...simulation.nodes()]);
        });

        // copy nodes into simulation
        simulation.nodes(apps.map((app) => ({ id: app })));
        // slow down with a small alpha
        simulation.alpha(0.1).restart();

        return simulation;
        // return () => simulation.stop();
    }, []);

    const handleRender = React.useCallback(
        (ref) => {
            if (!ref) return;
            setTimeout(() => {
                d3.select(`#${ref.id}`)
                    .selectAll('div')
                    .data(sim.nodes())
                    .call(
                        d3
                            .drag()
                            // .on('start', () => sim.alpha(0.1).restart())
                            .on('drag', (e, d) => {
                                sim.alpha(0.1).restart();
                                d.fx = e.x;
                                d.fy = e.y;
                            })
                            .on('end', (_, d) => {
                                d.fx = null;
                                d.fy = null;
                            })
                    );
            }, 0);
        },
        [sim]
    );

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppBar useSplash={false}>
                <DarkThemeButton
                    onClick={() => {
                        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                >
                    <Switch on={theme === 'light'} />
                </DarkThemeButton>
            </AppBar>
            <Content>
                {/* <CircleParent style={{ borderRadius: '50%' }}>
                    {apps.map((entry) => {
                        return <CircleChild>{entry}</CircleChild>;
                    })}
                </CircleParent> */}
                <div style={{ position: 'relative' }} id="network" ref={handleRender}>
                    {nodes.map((node, index) => (
                        <div
                            key={node.id}
                            style={{
                                left: node.x,
                                top: node.y,
                                position: 'absolute',
                                background: 'red',
                                userSelect: 'none',
                                fontSize: 72,
                                // pointerEvents: 'none',
                            }}
                            onClick={(e) => console.log('clicked', node.id)}
                        >
                            {node.id}
                        </div>
                    ))}
                </div>
            </Content>
            {/* <div id="scrolltrigger" ref={scrollRef} style={{ height: 1 }}></div> */}
        </ThemeProvider>
    );
};

export default App;
