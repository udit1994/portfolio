import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Layout from "components/Layout";
import Project from "components/Project";
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const PageIcon = (props) => `
left: 4.8%;
position: fixed;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${props.theme.color};
transform: ${props.selected ? "scale(2, 2)" : null};
&:hover {
  transform: scale(2, 2);
}
transition: transform 0.2s;
white-space: nowrap;
`;

const PseudoElement = (props) => `
  &::after {
    padding-left: 10px;
    font-size: 15px;
    content: '${props.content}';
    color: ${props.theme.color};
  }
`;

const PageIcon1 = styled.div`
  ${PageIcon};
  top: 40%;
  ${PseudoElement};
`;

const PageIcon2 = styled.div`
  ${PageIcon};
  top: 45%;
  ${PseudoElement};
`;

const PageIcon3 = styled.div`
  ${PageIcon};
  top: 50%;
  ${PseudoElement};
`;

const Home = () => {
  const [path, setPath] = useState("/");

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <BrowserRouter>
        <Wrapper theme={theme}>
          <Layout />
          <Link to="/">
            <PageIcon1
              content="About me"
              theme={theme}
              selected={path === "/" ? true : false}
              onClick={() => setPath("/")}
            />
          </Link>
          <Link to="/project">
            <PageIcon2
              content="Skills"
              theme={theme}
              selected={path === "/skill" ? true : false}
              onClick={() => setPath("/skill")}
            />
          </Link>
          <Link to="/contact">
            <PageIcon3
              content="Contact"
              theme={theme}
              selected={path === "/contact" ? true : false}
              onClick={() => setPath("/contact")}
            />
          </Link>
          <Switch>
            <Container>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
            </Container>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default Home;
