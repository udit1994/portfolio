import Particles from "react-particles-js";
import React from "react";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
  background-color: #ffffff;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: -1;
`;

function Canvas() {
  return (
    <StyledParticles
      params={{
        particles: {
          color: {
            value: "#000000",
          },
          number: {
            value: 50,
            density: {
              enable: true,
            },
          },
          size: {
            value: 7,
            random: true,
          },
          move: {
            direction: "bottom",
            out_mode: "out",
          },
        },
      }}
    />
  );
}

export default Canvas;
