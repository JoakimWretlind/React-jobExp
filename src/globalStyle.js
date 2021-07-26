import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.5;
    font-size: 1.6rem;
    background: #F1F5F8;
  }

  h1, h2, h3, h4 {
    line-height: 1;
  }

  h1 {
    font-family: 'Segoe UI', sans-serif;
    font-size: 6.4rem;
  }

  h2 {
    font-size: 4rem;
    letter-spacing: .2rem;
     color: #102A42;
  }
  h3 {
    font-size: 2.8rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;