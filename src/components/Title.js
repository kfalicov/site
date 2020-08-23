import React from 'react';
import styled from 'styled-components';

const BaseTitle = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

const StyledTitle = styled(BaseTitle)`
    font-size: 10rem;
`;

export { StyledTitle as Title };
