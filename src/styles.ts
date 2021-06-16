import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local("Roboto-Bold"), local("Roboto-Regular"),
        url('../fonts/Roboto-Bold.ttf'),
        url('../fonts/Roboto-Regular.ttf');
    }

    *{
        font-family: 'Roboto';
        margin: 0px;
        padding: 0px;
    }
    
`;