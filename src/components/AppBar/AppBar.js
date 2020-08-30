import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';
import Chevron from '../../Icons/Chevron';

const Header = styled.div.attrs((props) => ({
    style: { height: props.useSplash ? '100vh' : '56px' },
}))`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 4px;
    background: ${({ theme }) => theme.palette.background.paper};
    transition: height ${({ theme }) => theme.duration.snail}
        ${({ theme }) => theme.easing.easeInOutSine};
    box-shadow: ${({ theme }) => theme.shadows[1]};
`;

const Relative = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Spacer = styled.div.attrs((props) => ({
    style: { flexGrow: props.useSplash ? 1 : 0 },
}))`
    transition: flex-grow ${({ theme }) => theme.duration.snail}
        ${({ theme }) => theme.easing.easeInOutSine};
`;

const SwipeUp = styled.div.attrs((props) => ({
    style: { opacity: props.useSplash ? 1 : 0 },
}))`
    position: absolute;
    color: ${({ theme }) => theme.palette.text.secondary};
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    transition: opacity ${({ theme }) => theme.duration.slow}
        ${({ theme }) => theme.easing.easeInOutSine};
`;

export const AppBar = ({ children, useSplash, shrink }) => {
    return (
        <Header useSplash={useSplash}>
            <Relative>
                <Spacer useSplash={useSplash} />
                <Banner useSplash={useSplash} shrink={shrink} />

                <Spacer useSplash={useSplash} />
                <SwipeUp useSplash={useSplash}>
                    <Chevron />
                    <p style={{ margin: '0.5em' }}>Scroll to get started</p>
                </SwipeUp>
                {children}
            </Relative>
        </Header>
    );
};
