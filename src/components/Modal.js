import React, { useContext } from "react";

import styled from "styled-components";
import ThemeContext from "contexts/ThemeContext";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.canvas};
  color: ${(props) => props.theme.color};
  padding: 50px 30px;
`;

const Close = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.canvas};
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
  display: flex;
  font-family: sans-serif;
  font-size: 32px;
  font-weight: 100;
  height: 64px;
  justify-content: center;
  left: calc(50% - 32px);
  position: fixed;
  width: 64px;
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
      <Wrapper theme={theme}>
        <Close onClick={onCloseModal}>X</Close>
        <Body>{children}</Body>
      </Wrapper>
    )
  );
}

export default Modal;
