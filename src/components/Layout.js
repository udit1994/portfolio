import React, { useContext } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

import Header from "components/Header";
import Social from "components/Social";
import ThemeContext from "context/ThemeContext";

const Border = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  border-color: ${(props) => props.theme.color};
  border-width: 1px;
  border-style: solid;
  height: 90%;
  width: 90%;
  opacity: 0.3;
`;

const StyledParticles = styled(Particles)`
  z-index: 0;
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  border-color: ${(props) => props.theme.color};
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
