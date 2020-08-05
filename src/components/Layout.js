import React, { useContext } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

import Header from "components/Header";
import Social from "components/Social";
import ThemeContext from "context/ThemeContext";

const Border = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 13;
  justify-self: center;
  align-self: center;
  border-color: ${(props) => props.theme.color};
  border-width: 1px;
  border-style: solid;
  height: 92.2%;
  width: 90%;
  opacity: 0.3;
`;

const StyledParticles = styled(Particles)`
  display: hidden;
  @media only screen and (min-width: 600px) {
    z-index: 0;
    display: block;
    position: fixed;
    height: 100%;
    width: 100%;
    border-color: ${(props) => props.theme.color};
  }
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
