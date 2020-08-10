import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }
  html, #root {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: "Josefin Sans", sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
