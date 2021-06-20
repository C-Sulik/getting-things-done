import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Roboto';
      src: local("Roboto-Bold"), local("Roboto-Regular"),
      url('../fonts/Roboto-Bold.ttf'),
      url('../fonts/Roboto-Regular.ttf');
    }

    html {
      box-sizing: border-box;
      height: 100%;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Roboto';
      min-height: 100%;
      font-size: 1.6rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
