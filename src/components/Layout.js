import React, { useState } from "react";
import styled from "styled-components";

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

  @media only screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
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
  const [showNav, setShowNav] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const setDisplayNav = () => {
    setShowNav((prev) => !prev);
  };

  const setDisplayEmail = () => {
    setShowEmail((prev) => !prev);
  };

  return (
    <Container>
      <Header setDisplayNav={setDisplayNav} showNav={showNav} />
      <Wrapper>
        {props.children({
          opacity: showNav || showEmail ? 1 : 0,
          setDisplayEmail,
        })}
      </Wrapper>
      <Footer />
      {showNav ? <Navigation setDisplayNav={setDisplayNav} /> : null}
      {showEmail ? <Email setDisplayEmail={setDisplayEmail} /> : null}
    </Container>
  );
};

export default Layout;
