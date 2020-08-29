import React from 'react';
import styled from 'styled-components';

const Title = styled.div.attrs((props) => ({
    style: {
        fontSize: props.useSplash ? '10rem' : '3rem',
        gridColumn: `span ${props.useSplash ? 2 : 1}`,
    },
}))`
    line-height: 65%;
    transition: font-size ${({ theme }) => theme.duration.snail}
        ${({ theme }) => theme.easing.easeInOutSine};
`;
const Subtitle = styled.div`
    font-size: 2rem;
    justify-self: end;
    grid-column: 2 / span 2;
    line-height: 1.45rem;
    align-self: end;
`;

const BaseBanner = ({ className, useSplash }) => {
    return (
        <div className={className}>
            <Title useSplash={useSplash}>Site</Title>
            <Subtitle>by kyle</Subtitle>
        </div>
    );
};

const StyledBanner = styled(BaseBanner)`
    padding: 6px 6px 2px 6px;
    display: inline-grid;
    grid-template-columns: auto auto 0;
    grid-row-gap: 0.33rem;
    grid-column-gap: 0.33rem;
`;

export { StyledBanner as Banner };
