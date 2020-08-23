import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Questrial', sans-serif;
    transition: background 140ms cubic-bezier(0.61, 1, 0.88, 1), color 140ms cubic-bezier(0.61, 1, 0.88, 1);
  }
  `;
