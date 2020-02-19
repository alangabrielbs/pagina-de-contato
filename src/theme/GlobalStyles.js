import { createGlobalStyle } from 'styled-components';
import 'circular-std';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    color: #262A3F;
    background: #FEFEFE;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: CircularStd, sans-serif;
  }

  ul {
    list-style: none;
  }
`;
