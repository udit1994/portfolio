import React, { useContext } from "react";

import styled, { keyframes } from "styled-components";
import ThemeContext from "contexts/ThemeContext";

const slideUp = keyframes`
  0% {
    transform: translate(0%, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }

  100% {
    transform: translate(0%, 100%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  padding: 50px 30px;
  animation: ${(props) => (props.show ? slideUp : slideDown)} 0.5s linear
    forwards;
`;

const Close = styled.div`
  align-items: center;
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
  background-image: linear-gradient(-19deg, #21d4fd 0%, #b721ff 100%);
  display: flex;
  font-family: sans-serif;
  font-size: 32px;
  font-weight: 100;
  height: 50px;
  justify-content: center;
  left: calc(50% - 25px);
  position: fixed;
  width: 50px;
`;

const Body = styled.div`
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

function Modal({ children, onCloseModal, show }) {
  const { theme } = useContext(ThemeContext);

  return (
    show && (
      <Wrapper theme={theme} show={show}>
        <Close onClick={onCloseModal}>X</Close>
        <Body>{children}</Body>
      </Wrapper>
    )
  );
}

export default Modal;
