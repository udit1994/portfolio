import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/google.svg";
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
  const handleClick = () => {};

  return (
    <>
      <GithubWrapper onClick={handleClick}>
        <Github />
      </GithubWrapper>
      <TwitterWrapper>
        <Twitter />
      </TwitterWrapper>
      <GoogleWrapper>
        <Google />
      </GoogleWrapper>
    </>
  );
};

export default Social;
