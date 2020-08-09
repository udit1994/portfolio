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
  background-color: black;
  display: block;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: -1;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledParticles
      params={{
        particles: {
          number: { value: 2, density: { enable: true, value_area: 800 } },
          color: { value: "#1b1e34" },
          shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000" },
            polygon: { nb_sides: 6 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 160,
            random: false,
            anim: { enable: true, speed: 10, size_min: 40, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
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
