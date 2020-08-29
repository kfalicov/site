import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';
import Chevron from '../../Icons/Chevron';

const Header = styled.div.attrs((props) => ({
    style: { height: `${(1 - props.scroll) * 100}%` },
}))`
    min-height: 56px;
    max-height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 4px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

const Relative = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Spacer = styled.div.attrs((props) => ({
    style: { flexGrow: props.scroll >= 0.94 ? 0 : 1 },
}))`
    transition: flex-grow 140ms ${({ theme }) => theme.easing.easeInOutSine};
`;

const SwipeUp = styled.div.attrs((props) => ({
    style: { opacity: props.scroll ? 0 : 1 },
}))`
    position: absolute;
    color: ${({ theme }) => theme.palette.text.secondary};
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    transition: opacity 140ms;
`;

export const AppBar = ({ children, scroll, shrink }) => {
    return (
        <Header scroll={scroll}>
            <Relative>
                <Spacer scroll={scroll} />
                <Banner scroll={scroll} shrink={shrink} />

                <Spacer scroll={scroll} />
                {children}
                <SwipeUp scroll={scroll}>
                    <Chevron />
                    <p style={{ margin: '0.5em' }}>Scroll to get started</p>
                </SwipeUp>
            </Relative>
        </Header>
    );
};
