import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import Banner from "components/Banner";
import self from "assets/self.jpg";
import ThemeContext from "contexts/ThemeContext";

const animateSmallImage = keyframes`
  100% {
    width: 50%;
    height: 80%;
  }
`;

const animateImage = keyframes`
  0% {
    width: 50%;
  }
  100% {
    width: 50%;
  }
`;
const Image = styled.img`
  animation: ${animateImage} 0s 5s linear forwards;
  display: block;
  src: ${(props) => props.src};
  width: 0px;
  zindex: 1;
  @media only screen and (max-width: 600px) {
    animation: ${animateSmallImage} 0s 5s linear forwards;
  }
`;

const animateHLine = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 220%;
  }
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

const animateVLine = keyframes`
  from {
    height: 0%;
  }
  to {
    height: 140%;
  }
`;

const VerticalLine = styled.div`
  grid-column-end: 12;
  grid-column-start: 11;
  grid-row-end: 9;
  grid-row-start: 2;
  margin-left: 10px;
  height: 0;
  width: 2px;
  animation: ${animateVLine} 2s 3s linear forwards;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const ImageContainer = styled.div`
  align-self: end;
  display: flex;
  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 10;
  grid-row-start: 5;
  justify-content: flex-end;
  justify-self: end;
  z-index: 10;
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Banner
        title="Hey there!"
        description={{
          main:
            "I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.",
        }}
        footer="Interested in bringing innovative ideas to life. Javascript is my new found love."
        delay
      />
      <VerticalLine theme={theme} />
      <ImageContainer theme={theme}>
        <Image src={self} />
      </ImageContainer>
      <HorizontalLine theme={theme} />
    </>
  );
}

export default About;
