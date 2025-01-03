import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *:active, *:focus {
    -webkit-tap-highlight-color: transparent;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fontFamily.body};
    margin: 0;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.gradient};
  }

  ul, ol {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  button {
    padding: 0;
    background-color: transparent;
  }

  figure {
    margin: 0;
  }

  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  #root {
    width: 100%;
    max-width: 792px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface};
    margin: 16px 0;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }

  input[type='search']::-ms-clear, 
  input[type='search']::-ms-reveal, 
  input[type='search']::-webkit-search-decoration, 
  input[type='search']::-webkit-search-cancel-button, 
  input[type='search']::-webkit-search-results-button, 
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
`