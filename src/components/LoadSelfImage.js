import React from "react";
import styled, { keyframes } from "styled-components";
import self from "assets/self.jpg";

const animateImage = keyframes`
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Image = styled.img`
  align-self: center;
  animation: ${animateImage} 2s 1s linear forwards;
  border-radius: 50%;
  display: block;
  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 8;
  grid-row-start: 2;
  max-width: 250px;
  object-fit: contain;
  opacity: 0;
  transform: translate(0, -500px);
  width: 100%;
  z-index: 10;

  @media only screen and (max-width: 1023px) {
    max-width: 200px;
  }
`;

function LoadSelfImage() {
  return <Image src={self} alt="Udit Kaushik's image" />;
}

export default LoadSelfImage;
