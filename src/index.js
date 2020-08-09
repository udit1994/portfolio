import Particles from "react-particles-js";
import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }
  body {
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
  }
`;

const StyledParticles = styled(Particles)`
  border-color: ${(props) => props.theme.color};
  display: block;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 0;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 25,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
