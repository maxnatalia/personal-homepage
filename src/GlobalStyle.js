import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        background-color: ${({theme}) => theme.elementColor.background};
        color: ${({theme}) => theme.elementColor.text};
        letter-spacing: 0.05em;
        line-height: 1.4;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin: 0;
    }
`;