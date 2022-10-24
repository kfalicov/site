import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.default};
    transition: background 140ms ${({ theme }) => theme.easing.easeOutSine}, 
      color 140ms ${({ theme }) => theme.easing.easeOutSine};
  }
  a{
    color:${({ theme }) => theme.palette.text.default};
    &:visited {
      color:${({ theme }) => theme.palette.text.secondary};
    }
  }
  p{
    margin:4px;
  }
  button {
    background: transparent;
    color: ${({ theme }) => theme.palette.text.default};
    text-transform: uppercase;
    &:hover:after {
          position: absolute;
          inset: 0;
          content: '';
          background: ${({ theme }) => theme.palette.background.hover};
  }
    &:active:after{
      position: absolute;
      inset: 0;
      content: '';
      background: ${({ theme }) => theme.palette.background.focus};
    };
  }
  div{
    box-sizing: border-box;
  }
  `;
