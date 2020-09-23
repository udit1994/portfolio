import React from "react";
import styled, { keyframes } from "styled-components";

const Paragraph = styled.section`
  grid-column-end: 7;
  grid-column-start: 4;
  grid-row-end: 6;
  grid-row-start: 4;
`;

const greeting = keyframes`
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

const Greeting = styled.p`
  animation: ${greeting};
  animation-delay: 0.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 10px;
  transform: translate(0, 100%);
`;

const description = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Description = styled.p`
  animation: ${description};
  animation-duration: 0.5s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  margin: auto;
  opacity: 0;
  transform: translate(0, 100%);

  > ul {
    margin-bottom: 0;
  }
`;

const divider = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: 100%
  }
`;

const Divider = styled.div`
  animation: ${divider};
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  padding-bottom: 10px;
  width: 0%;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-bottom-style: solid;
  -webkit-border-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  border-image-slice: 2;
`;

const goal = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Goal = styled.p`
  animation: ${goal};
  animation-duration: 0.75s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  margin: auto;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

function Banner({ description, goal, title }) {
  return (
    <Paragraph>
      <Greeting>
        <em>{title}</em>
      </Greeting>
      <Description>{description}</Description>
      <Divider />
      <Goal>{goal}</Goal>
    </Paragraph>
  );
}

export default Banner;
