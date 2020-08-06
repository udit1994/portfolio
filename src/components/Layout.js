import Particles from "react-particles-js";
import React, { useContext } from "react";
import styled from "styled-components";

import Header from "components/Header";
import Social from "components/Social";
import ThemeContext from "context/ThemeContext";

const Border = styled.div`
  align-self: center;
  border-color: ${(props) => props.theme.color};
  border-style: solid;
  border-width: 1px;
  grid-column-end: 13;
  grid-column-start: 1;
  grid-row-end: 13;
  grid-row-start: 1;
  height: 92.2%;
  justify-self: center;
  opacity: 0.3;
  width: 90%;
`;

const StyledParticles = styled(Particles)`
  border-color: ${(props) => props.theme.color};
  display: block;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 0;
`;

const Layout = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
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
      <Border theme={theme} />
      <Header />
      <Social />
    </>
  );
};

export default Layout;
