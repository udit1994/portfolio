import React from "react";
import styled from "styled-components";

import Anchor from "components/styled/Anchor";

const Wrapper = styled.address`
  align-items: center;
  box-shadow: 0 -1px 4px #97d9e1;
  display: flex;
  font-size: 0.7rem;
  height: 3rem;
  justify-content: space-around;
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
        href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mail
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
