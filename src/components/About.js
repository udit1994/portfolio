import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import self from "assets/self.jpg";
import ThemeContext from "context/ThemeContext";

const animateLine = keyframes`
from {
  width: 0%
}
to {
  width: 100%
}
`;

const ImageWrapper = styled.div`
  align-self: end;
  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 10;
  grid-row-start: 5;
  justify-self: end;
  z-index: 10;
`;

const VerticalLine = styled.div`
  content: "";
  grid-column-end: 12;
  grid-column-start: 11;
  grid-row-end: 10;
  grid-row-start: 3;
  //height: 120%;
  left: 5%;
  margin-left: 10px;
  width: 2px;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const HorizontalLine = styled.div`
  content: "";
  grid-column-end: 8;
  grid-column-start: 5;
  grid-row-end: 11;
  grid-row-start: 10;
  height: 2px;
  margin-top: 10px;
  width: 220%;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const ShowTopText1 = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, 200%, 0); 
  }
  40%, 60% {
    opacity: 1;
    transform: translate3d(0, 200%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const ShowTopText2 = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const ShowBottomText = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const TextTop1 = styled.div`
  animation: ${ShowTopText1} 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
`;

const TextTop2 = styled.div`
  animation: ${ShowTopText2} 0.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
`;

const TextTop = styled.div`
  animation: ${animateLine} 1s 0.75s linear forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const TextBottom = styled.div`
  animation: ${ShowBottomText} .75s;
  animation-delay: 2.0s;
  animation-fill-mode: forwards;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

const Paragraph = styled.div`
  align-self: center;
  grid-column-end: 6;
  grid-column-start: 3;
  grid-row-end: 6;
  grid-row-start: 4;
  justify-self: start;
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Paragraph>
        <TextTop1>Hey,</TextTop1>
        <TextTop2>
          I am Udit Kaushik, a Software Engineer currently located in Bangalore,
          India.
        </TextTop2>
        <TextTop />
        <TextBottom>
          A result oriented developer, interested in bringing innovative ideas
          to life.
        </TextBottom>
      </Paragraph>
      <VerticalLine theme={theme} />
      <ImageWrapper theme={theme}>
        <img
          src={self}
          alt=""
          style={{ display: "block", width: "240px", zIndex: 1 }}
        />
      </ImageWrapper>
      <HorizontalLine theme={theme} />
    </>
  );
}

export default About;
