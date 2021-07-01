import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }
    body {
        font-family: 'Montserrat Alternates', sans-serif;
        width: 100%;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: lighter;
        color: #333;
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    img {
        display: block;
    }
    input {
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
    }

`;

export default GlobalStyles;