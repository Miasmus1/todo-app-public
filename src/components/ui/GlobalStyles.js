import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    caret-color: hsl(220, 98%, 61%);
  }

  body {
    max-width: 1440px;
    font-size: 1.8rem;
    margin: 0 auto;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Josefin Sans', sans-serif;
    transition: all 0.3s ease-out;
  }

  .active {
    color: hsl(220, 98%, 61%);
  }

  input {
    font: inherit;
  }
  
  input:focus {
    outline: none;
   }

   ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.text};
    border-radius: 0 1rem 0 0;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.rowColor};
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 1rem;
  }
`;
