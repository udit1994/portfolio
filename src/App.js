import React, { useState } from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

import Layout from "components/Layout";
import ThemeContext, { themes } from "contexts/ThemeContext";

const Container = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 1023px) {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 50px 30px;
  }
`;

const StyledParticles = styled(Particles)`
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <StyledParticles
        params={{
          particles: {
            number: { value: 2, density: { enable: true, value_area: 800 } },
            color: { value: theme.canvas },
            shape: {
              type: "polygon",
              stroke: { width: 0, color: "#000" },
              polygon: { nb_sides: 6 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
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
        theme={theme}
      />
      <Container theme={theme}>
        <Layout />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
