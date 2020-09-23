import React from "react";

import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  padding: 50px 30px;
  animation: ${(props) => (props.show ? slideUp : "none")} 0.5s linear forwards;
`;

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

const Close = styled.div`
  align-items: center;
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
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
  return (
    show && (
      <Wrapper show={show}>
        <Body>{children}</Body>
        <Close onClick={onCloseModal}>X</Close>
      </Wrapper>
    )
  );
}

export default Modal;
