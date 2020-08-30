import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.default};
    transition: background 140ms ${({ theme }) => theme.easing.easeOutSine}, 
      color 140ms ${({ theme }) => theme.easing.easeOutSine};
  }
  button {
    background: transparent;
    color: ${({ theme }) => theme.palette.text.default};
    text-transform: uppercase;
    &:hover{
      background: ${({ theme }) => theme.palette.background.hover};
    };
    &:active{
      background: ${({ theme }) => theme.palette.background.focus};
    };
  }
  div{
    box-sizing: border-box;
  }
  `;
