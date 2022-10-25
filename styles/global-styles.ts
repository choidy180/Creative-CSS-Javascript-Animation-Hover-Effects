import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Pretendard-Regular';
        overflow-x:hidden;
        overflow-y: hidden;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    p, span, b, h1, h2, h3, h4, h5, h6{
        color: #FFFFFF;
    }

    @media only screen and (max-width: 768px) {
        body {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 576px) {
        body {
            font-size: 10px;
        }
    }
`
export default GlobalStyle;