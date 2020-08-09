import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import Banner from "components/Banner";
import self from "assets/self.jpg";
import ThemeContext from "contexts/ThemeContext";

const animateImage = keyframes`
  to {
    opacity: 1;
  }
`;

const Image = styled.img`
  animation: ${animateImage} 2s linear forwards;
  border-radius: 50%;
  display: block;

  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 8;
  grid-row-start: 3;
  align-self: center;

  height: 100%;
  max-height: 250px;
  max-width: 250px;
  object-fit: cover;
  opacity: 0;
  width: 100%;
  z-index: 10;
`;

const animateHLine = keyframes`
  to {
    width: 100%;
  }
`;

const HorizontalLine = styled.div`
  animation: ${animateHLine} 12s linear infinite;
  bottom: 70px;
  height: 1px;
  opacity: 0.5;
  position: fixed;
  width: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor},
    lightblue
  );
`;

const animateVLine = keyframes`
  to {
    height: 100%;
  }
`;

const VerticalLine = styled.div`
  animation: ${animateVLine} 12s linear infinite;
  height: 0;
  opacity: 0.5;
  position: fixed;
  right: 112px;
  width: 1px;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    lightblue
  );
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HorizontalLine theme={theme} />
      <VerticalLine theme={theme} />

      <Banner
        content={{
          title: "Hey there!",
          description: {
            main:
              "I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.",
          },
          footer:
            "Interested in bringing innovative ideas to life. Javascript is my new found love.",
        }}
      />
      <Image src={self} />
    </>
  );
}

export default About;
