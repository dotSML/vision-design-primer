import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    transition: all 0.2s;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
  }`;
