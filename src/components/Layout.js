import React, { Fragment, useContext } from "react";
import Media from "react-media";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import About from "components/About";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Project from "components/Project";
import Skill from "components/Skill";
import Social from "components/Social";

import ThemeContext from "contexts/ThemeContext";

const Frame = styled.div`
  border-color: ${(props) => props.theme.color};
  border-style: solid;
  border-width: 1px;
  height: calc(100% - 80px);
  left: 85px;
  opacity: 0.3;
  position: absolute;
  top: 40px;
  width: calc(100% - 170px);

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Layout = () => {
  const theme = useContext(ThemeContext);
  const { hash } = useLocation();

  return (
    <>
      <Header />
      <Frame theme={theme} />
      <Navbar />
      <Social />
      <Media
        queries={{
          small: "(max-width: 1023px)",
        }}
      >
        {(match) => {
          const Component = match.small ? MobileWrapper : Fragment;

          return (
            <Component>
              {hash === "" && <About />}
              {hash === "#projects" && <Project />}
              {hash === "#skills" && <Skill />}
            </Component>
          );
        }}
      </Media>
    </>
  );
};

export default Layout;
