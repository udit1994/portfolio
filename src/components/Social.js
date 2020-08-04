import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/email.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";

const GithubWrapper = styled.span`
  position: fixed;
  top: 40%;
  left: 95%;
  width: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const GoogleWrapper = styled.span`
  position: fixed;
  top: 50%;
  left: 95%;
  width: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const TwitterWrapper = styled.span`
  position: fixed;
  top: 45%;
  left: 95%;
  width: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Social = () => {
  return (
    <>
      <GithubWrapper>
        <a href="https://github.com/udit1994" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </GithubWrapper>
      <TwitterWrapper>
        <a href="https://twitter.com/uditkaushik94" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
      </TwitterWrapper>
      <GoogleWrapper>
        <a href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio">
          <Google />
        </a>
      </GoogleWrapper>
    </>
  );
};

export default Social;
