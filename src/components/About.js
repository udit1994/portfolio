import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import Banner from "components/Banner";
import self from "assets/self.jpg";
import ThemeContext from "context/ThemeContext";

const ImageWrapper = styled.div`
  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 10;
  grid-row-start: 5;
  align-self: end;
  justify-self: end;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

const animateImage = keyframes`
  100% {
    width: 50%;
  }
`;
const animateVLine = keyframes`
  0% {
    height: 0%;
  }
  50% {
    height: 60%;
  }
  100% {
    height: 140%;
  }
`;
const animateHLine = keyframes`
0% {
  width: 0%;
}
50% {
  width: 0%;
}
100% {
  width: 220%;
}
`;

const VerticalLine = styled.div`
  grid-column-end: 12;
  grid-column-start: 11;
  grid-row-end: 9;
  grid-row-start: 2;
  left: 5%;
  margin-left: 10px;
  height: 0%;
  width: 2px;
  animation: ${animateVLine} 2s 3s linear forwards;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const HorizontalLine = styled.div`
  grid-column-end: 8;
  grid-column-start: 5;
  grid-row-end: 11;
  grid-row-start: 10;
  height: 2px;
  margin-top: 10px;
  width: 0;
  animation: ${animateHLine} 2s 3s linear forwards;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const Image = styled.img`
  width: 0px;
  src: ${self};
  display: block;
  zindex: 1;
  animation: ${animateImage} 0s 5s linear forwards;
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Banner
        textTop1="Hey,"
        textTop2="I am Udit Kaushik, a Software Engineer currently located in Bangalore,
          India."
        textBottom="A result oriented developer, interested in bringing innovative ideas
          to life."
        delay
      />
      <VerticalLine theme={theme} />
      <ImageWrapper theme={theme}>
        <Image src={self} />
      </ImageWrapper>
      <HorizontalLine theme={theme} />
    </>
  );
}

export default About;
