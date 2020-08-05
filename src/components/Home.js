import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Layout from "components/Layout";
import Skill from "components/Skill";
import About from "components/About";
import Contact from "components/Contact";

import ThemeContext from "context/ThemeContext";

const Wrapper = styled.div`
  widht: 100vh;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

const PageIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color};
  &:hover {
    transform: scale(1.7, 1.7);
  }
  transition: transform 0.1s;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10%;
  padding: 1px;
  color: ${(props) => props.theme.color};
  padding-left: 10px;
  transform: ${(props) => (props.selected ? "scale(1.5, 1.5)" : "")};
`;

const NavLinkWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 13;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: spaced-around;
  margin-left: 20px;
`;
const NavLink = styled(Link)`
  z-index: 10;
  text-decoration: none;
`;

const Home = () => {
  const [path, setPath] = useState("/");

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <BrowserRouter>
        <Wrapper theme={theme}>
          <Container>
            <Layout />
            <NavLinkWrapper>
              <NavLink to="/" style={{}}>
                <PageIcon
                  content=""
                  theme={theme}
                  selected={path === "/" ? true : false}
                  onClick={() => setPath("/")}
                >
                  About me
                </PageIcon>
              </NavLink>
              <NavLink to="/skill">
                <PageIcon
                  content=""
                  theme={theme}
                  selected={path === "/skill" ? true : false}
                  onClick={() => setPath("/skill")}
                >
                  Skills
                </PageIcon>
              </NavLink>
              <NavLink to="/contact">
                <PageIcon
                  theme={theme}
                  selected={path === "/contact" ? true : false}
                  onClick={() => setPath("/contact")}
                >
                  Contact
                </PageIcon>
              </NavLink>
            </NavLinkWrapper>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/skill">
                <Skill />
              </Route>
            </Switch>
          </Container>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default Home;
