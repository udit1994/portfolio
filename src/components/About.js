import React from "react";
import styled, { keyframes } from "styled-components";

import self from "assets/self.jpg";

const Wrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  justify-self: end;
  align-self: center;
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
  animation: ${ShowTopText1} 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  transform: translate(0, 100%);
`;

const TextTop2 = styled.div`
  opacity: 0;
  animation: ${ShowTopText2} 0.5s;
  animation-delay: 1s;
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
  animation: ${ShowBottomText} 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  transform: translate(0, -100%);
}
`;

const Paragraph = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: start;
  align-self: center;
`;

const VerticalLine = styled.div``;

function About() {
  return (
    <>
      <VerticalLine />
      <Paragraph>
        <TextTop>
          <TextTop1>
            Hey,
          </TextTop1>
          <TextTop2>
            I am Udit Kaushik, a Software Engineer currently located in Bangalore, India.
          </TextTop2>
        </TextTop>
        <TextBottom>
          A result oriented developer, interested in bringing innovative ideas to life.
        </TextBottom>
      </Paragraph>
      <Wrapper>
        <img src={self} alt="" style={{ width: "225px"}} />
      </Wrapper>
    </>
  );
}

export default About;
