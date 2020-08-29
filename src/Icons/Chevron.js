import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: translateY(6px);
    }
    to {
        transform: translateY(-6px);
    }
`;

const Caret = styled.path`
    fill: none;
    fill-rule: evenodd;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
    animation: ${rotate} 1s ${({ theme }) => theme.easing.easeInOutCubic} infinite alternate;
`;

const Chevron = ({ on }) => {
    return (
        <svg viewBox="0 0 24 24" width="1.5em" height="1.5em">
            <g id="layer2">
                <Caret id="path846" d="m 3.17496,17 9.52488,-9 8.46656,9" />
            </g>
        </svg>
    );
};

export default Chevron;
