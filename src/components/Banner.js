import React from 'react';
import styled from 'styled-components';
import { Subtitle } from './Subtitle';
import { Title } from './Title';

const BaseBanner = ({ className, children }) => {
    return (
        <div className={className}>
            <Title>Site</Title>
            <Subtitle>by kyle</Subtitle>
        </div>
    );
};

const StyledBanner = styled(BaseBanner)`
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto 1rem;
    grid-row-gap: 0.33rem;
    justify-content: center;
    & > div {
        line-height: 65%;
    }
`;

export { StyledBanner as Banner };
