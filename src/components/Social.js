import React from "react";
import styled, { keyframes } from "styled-components";

import SocialLinks from "components/SocialLinks";

const animateSocial = ({ isActive }) => keyframes`
  100% {
    right: ${isActive ? "50%" : "50px"};
    transform: ${isActive ? "rotate(90deg)" : "none"};
  }
`;

const animateSocialSmall = ({ isActive }) => keyframes`
  100% {
    right: ${isActive ? "45%" : "5px"};
    transform: ${isActive ? "rotate(90deg)" : "none"};
  }
`;

const Wrapper = styled.section`
  animation: ${animateSocial} 1s linear forwards;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isActive ? "300" : "200")}px;
  justify-content: space-between;
  position: fixed;
  right: 50px;
  top: calc(50% - ${(props) => (props.isActive ? "150" : "100")}px);

  > a {
    transform: ${(props) =>
      props.isActive ? "rotate(-90deg) scale(2)" : "none"};
  }

  @media only screen and (max-width: 1023px) {
    animation: ${animateSocialSmall} 1s linear forwards;
    display: none;
    right: 5px;

    > a {
      transform: ${(props) =>
        props.isActive ? "rotate(-90deg) scale(2)" : "none"};
    }
  }
`;

const Social = ({ hashRoute }) => {
  return (
    <Wrapper isActive={hashRoute === "#contact-me"}>
      <SocialLinks />
    </Wrapper>
  );
};

export default Social;
