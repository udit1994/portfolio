import React, { useState } from "react";
import styled from "styled-components";

import Canvas from "components/Canvas";
import Footer from "components/Footer";
import Email from "components/Email";
import Header from "components/Header";
import Navigation from "components/Navigation";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Arial", monospace;
  height: 100%;
  line-height: 1.5;
`;

const Wrapper = styled.main`
  height: calc(100% - 8rem);
  margin: auto;
  width: 50rem;

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;

const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const setDisplayMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const setDisplayForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <Canvas />
      <Container>
        <Header setDisplayMenu={setDisplayMenu} showMenu={showMenu} />
        <Wrapper>
          {props.children({
            opacity: showMenu || showForm ? 1 : 0,
            setDisplayForm,
          })}
        </Wrapper>
        <Footer showForm={showForm} />
        <Navigation showMenu={showMenu} setDisplayMenu={setDisplayMenu} />
        <Email showForm={showForm} setDisplayForm={setDisplayForm} />
      </Container>
    </>
  );
};

export default Layout;
