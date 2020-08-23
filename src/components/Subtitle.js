import React from 'react';
import styled from 'styled-components';

const BaseSubtitle = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

const StyledSubtitle = styled(BaseSubtitle)`
    font-size: 2rem;
    justify-self: end;
    grid-column: span 2;
`;

export { StyledSubtitle as Subtitle };
