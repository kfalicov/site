import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';

const Header = styled.div.attrs((props) => ({
    style: { height: `${(1 - props.scroll) * 100}vh` },
}))`
    min-height: 56px;
    max-height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    align-items: center;
    z-index: 1;
    padding: 4px;
    background: ${({ theme }) => theme.palette.background.paper};
`;

const Spacer = styled.div.attrs((props) => ({
    style: { flexGrow: Math.min(1 - props.scroll, 1) },
}))``;

export const AppBar = ({ children, scroll, shrink }) => {
    return (
        <Header scroll={scroll}>
            <Spacer scroll={scroll} />
            <Banner scroll={scroll} shrink={shrink} />
            <Spacer scroll={scroll} />
            {children}
        </Header>
    );
};
