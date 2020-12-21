import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  100% {
    transform: translatey(0);
  }
`;

const Modal = styled.section`
  animation: ${slideUp} 0.5s linear forwards;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(155, 155, 155, 0.7));
  height: 100vh;
  position: fixed;
  transform: translatey(100rem);
  width: 100vw;
  z-index: 1;
`;

export default Modal;
