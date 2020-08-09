import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
  bottom: 40px;
  left: 85px;
  position: fixed;
  opacity: 0.3;
  right: 85px;
  top: 40px;
`;

const Layout = () => {
  const theme = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Frame theme={theme} />
      <Header />
      <Social />
      <Switch>
        <Route exact path="/portfolio">
          <About />
        </Route>
        <Route path="/portfolio/projects">
          <Project />
        </Route>
        <Route path="/portfolio/skill">
          <Skill />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
