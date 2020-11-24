import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

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
          number: {
            value: 100,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            direction: "bottom",
            out_mode: "out",
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "remove",
            },
          },
          modes: {
            remove: {
              particles_nb: 10,
            },
          },
        },
      }}
    />
  );
}

export default Canvas;
