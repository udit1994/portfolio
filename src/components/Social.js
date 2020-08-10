import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";

import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/email.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";

const animateSocial = ({ isActive }) => keyframes`
  to {
    right: ${isActive ? "50%" : "50px"};
    transform: ${isActive ? "rotate(90deg)" : "none"};
  }
`;

const animateSocialSmall = ({ isActive }) => keyframes`
  to {
    right: ${isActive ? "45%" : "5px"};
    transform: ${isActive ? "rotate(90deg)" : "none"};
  }
`;

const SocialWrapper = styled.div`
  animation: ${animateSocial} 1s linear forwards;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  right: 50px;
  height: ${(props) => (props.isActive ? "300" : "200")}px;
  top: calc(50% - ${(props) => (props.isActive ? "150" : "100")}px);

  > a {
    transform: ${(props) =>
      props.isActive ? "rotate(-90deg) scale(2)" : "none"};
  }

  @media only screen and (max-width: 1023px) {
    display: none;
    right: 5px;
    animation: ${animateSocialSmall} 1s linear forwards;

    > a {
      transform: ${(props) =>
        props.isActive ? "rotate(-90deg) scale(1.5)" : "none"};
    }
  }
`;

const Social = () => {
  const { pathname } = useLocation();

  return (
    <SocialWrapper isActive={pathname === "/contact-me"}>
      <a
        href="https://github.com/udit1994"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="https://twitter.com/uditkaushik94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio">
        <Google />
      </a>
    </SocialWrapper>
  );
};

export default Social;
