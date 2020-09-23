import React from "react";

import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  animation: ${(props) => (props.show ? slideUp : "none")} 0.5s linear forwards;
  background-color: black;
  bottom: 0;
  left: 0;
  padding: 50px 30px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
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
