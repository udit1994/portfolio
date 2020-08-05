import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import self from "assets/self.jpg";
import ThemeContext from "context/ThemeContext";

const pseudo = () => `
  content: "";
`;

const ImageWrapper = styled.div`
  z-index: 10;
  grid-column-start: 8;
  grid-column-end: 11;
  grid-row-start: 5;
  grid-row-end: 10;
  justify-self: end;
  align-self: end;
`;

const VerticalLine = styled.div`
  grid-column-start: 11;
  grid-column-end: 12;
  grid-row-start: 3;
  grid-row-end: 10;
  ${pseudo};
  margin-left: 10px;
  left: 5%;
  width: 2px;
  height: 120%;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const HorizontalLine = styled.div`
  grid-column-start: 5;
  grid-column-end: 8;
  grid-row-start: 10;
  grid-row-end: 11;
  ${pseudo};
  margin-top: 10px;
  width: 220%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor},
    ${(props) => props.theme.color}
  );
`;

const ShowTopText1 = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  40%, 60% {
    opacity: 1;
    transform: translate3d(0, 50%, 0); 
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
  opacity: 0;
  animation: ${ShowTopText1} 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  transform: translate(0, 100%);
`;

const TextTop2 = styled.div`
  opacity: 0;
  animation: ${ShowTopText2} 0.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  transform: translate(0, 100%);
`;

const TextTop = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
`;

const TextBottom = styled.div`
  opacity: 0;
  padding-top: 10px;
  animation: ${ShowBottomText} .75s;
  animation-delay: 2.0s;
  animation-fill-mode: forwards;
  transform: translate(0, -100%);
}
`;

const Paragraph = styled.div`
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
  justify-self: start;
  align-self: center;
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Paragraph>
        <TextTop>
          <TextTop1>Hey,</TextTop1>
          <TextTop2>
            I am Udit Kaushik, a Software Engineer currently located in
            Bangalore, India.
          </TextTop2>
        </TextTop>
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
