import React from "react";
import styled from "styled-components";

import Anchor from "components/styled/Anchor";

const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  height: 4rem;
  justify-content: space-between;
  margin: 0 2rem;
`;

function Footer() {
  return (
    <Wrapper>
      <Anchor
        href="https://github.com/udit1994"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Anchor>
      <Anchor
        href="https://www.instagram.com/udit.be/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </Anchor>
      <Anchor
        href="https://twitter.com/ud_udit94"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Anchor>
    </Wrapper>
  );
}

export default Footer;
