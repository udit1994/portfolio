import React, { useState } from "react";
import styled from "styled-components";

import Canvas from "components/Canvas";
import Footer from "components/Footer";
import Header from "components/Header";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 10rem 25rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem 0 1rem;
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
