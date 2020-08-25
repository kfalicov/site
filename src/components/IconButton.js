import React from 'react';
import styled from 'styled-components';

const StyledIconButton = styled.button`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    line-height: 100%;
`;

export const IconButton = ({ onClick, children, className }) => {
    return (
        <StyledIconButton className={className} onClick={onClick}>
            {children}
        </StyledIconButton>
    );
};
