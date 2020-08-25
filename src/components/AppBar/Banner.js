import React from 'react';
import styled from 'styled-components';

const Title = styled.div.attrs((props) => ({
    style: { fontSize: `${Math.min((1 - props.scroll) * 6 + 4, 10)}rem` },
}))`
    grid-column: span ${(props) => (props.scroll > 0.5 ? 1 : 2)};
    line-height: 65%;
`;
const Subtitle = styled.div`
    font-size: 2rem;
    justify-self: end;
    grid-column: 2 / span 2;
    line-height: 1.45rem;
    align-self: end;
`;

const BaseBanner = ({ className, scroll }) => {
    return (
        <div className={className}>
            <Title scroll={scroll}>Site</Title>
            <Subtitle>by kyle</Subtitle>
        </div>
    );
};

const StyledBanner = styled(BaseBanner).attrs((props) => ({
    style: { paddingTop: props.scroll ? '6px' : '2rem' },
}))`
    display: inline-grid;
    grid-template-columns: auto auto 0;
    grid-row-gap: 0.33rem;
    grid-column-gap: 0.33rem;
`;

export { StyledBanner as Banner };
