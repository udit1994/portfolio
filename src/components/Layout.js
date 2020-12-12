import React, { useState } from "react";
import styled from "styled-components";

import Canvas from "components/Canvas";
import Footer from "components/Footer";
import Header from "components/Header";

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

  const handleClick = () => setShowMenu((prev) => !prev);

  return (
    <>
      <Canvas />
      <Container>
        <Header handleClick={handleClick} showMenu={showMenu} />
        <Wrapper>{props.children(showMenu)}</Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
