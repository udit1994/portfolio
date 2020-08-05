import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/email.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";

const SocialWrapper = styled.div`
  display: flex;
  align-content: spaced-around;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  grid-column-end: 13;
  grid-column-start: 12;
  grid-row-end: 13;
  grid-row-start: 1;
  z-index: 1;
`;

const Anchor = styled.a`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Social = () => {
  return (
    <SocialWrapper>
      <Anchor
        href="https://github.com/udit1994"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </Anchor>
      <Anchor
        href="https://twitter.com/uditkaushik94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </Anchor>
      <Anchor href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio">
        <Google />
      </Anchor>
    </SocialWrapper>
  );
};

export default Social;
