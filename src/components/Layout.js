import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "components/About";
import Contact from "components/Contact";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Project from "components/Project";
import Skill from "components/Skill";
import Social from "components/Social";

import ThemeContext from "contexts/ThemeContext";

const Frame = styled.div`
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
        <Route path="/portfolio/contact">
          <Contact />
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
