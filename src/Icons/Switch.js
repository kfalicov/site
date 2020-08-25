import React from 'react';
import styled from 'styled-components';

const Panel = styled.rect`
    fill: none;
    fill-rule: evenodd;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
`;

const Flicker = styled.rect`
    font-variation-settings: normal;
    opacity: 1;
    vector-effect: none;
    fill: currentColor;
    fill-opacity: 1;
    fill-rule: evenodd;
    stop-color: currentColor;
    stop-opacity: 1;
    transition: transform 100ms linear;
`;

const Switch = ({ on }) => {
    return (
        <svg width={24} height={24}>
            <g id="layer1">
                <Panel ry="1" y="3" x="6" height="18" width="12" id="rect12" />
                <Flicker
                    ry="0"
                    y="6"
                    x="9"
                    height="5"
                    width="6"
                    id="rect837"
                    transform={`translate(0 ${on ? 0 : 7})`}
                />
                {/* <rect
                    ry="0"
                    y="8"
                    x="9"
                    height="8"
                    width="6"
                    id="rect839"
                    style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:#000000;fill-opacity:0.49799198;fill-rule:evenodd;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000;stop-opacity:1"
                /> */}
            </g>
        </svg>
    );
};

export default Switch;
