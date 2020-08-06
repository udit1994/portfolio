import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "context/ThemeContext";
import { ReactComponent as Link } from "assets/link.svg";

const animateLine = keyframes`
from {
  width: 0%
}
to {
  width: 100%
}
`;

const Paragraph = styled.div`
  align-self: center;
  grid-column-end: ${(props) => props.columnEnd || "6"};
  grid-column-start: ${(props) => props.columnStart || "3"};
  grid-row-end: ${(props) => props.rowEnd || "6"};
  grid-row-start: ${(props) => props.rowStart || "4"};
  justify-self: start;
  @media only screen and (max-width: 1024px) {
    align-self: start;
    grid-column-end: 12;
    grid-column-start: 2;
    grid-row-end: ${(props) => (props.rowEnd ? `${props.rowEnd}` : "5")};
    grid-row-start: ${(props) =>
      props.rowEnd ? `${props.rowStart - 1}` : "2"};
    font-size: ${(props) => (props.rowEnd ? ".8em" : "2")};
    align-self: start;
  }
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
  animation: ${ShowTopText1};
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
  white-space: nowrap;
  margin-bottom: 10px;
`;

const TextTop2 = styled.div`
  animation: ${ShowTopText2};
  animation-duration: 0.5s;
  animation-delay: ${(props) => (props.delay ? "1.5s" : "1.5s")};
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
`;

const TextTop = styled.div`
  animation: ${animateLine};
  animation-duration: 1s;
  animation-delay: ${(props) => (props.delay ? "2s" : "0.75s")};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const TextBottom = styled.div`
  animation: ${ShowBottomText};
  animation-duration: 0.75s;
  animation-delay: ${(props) => (props.delay ? "2.25s" : "2.0s")};
  animation-fill-mode: forwards;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

function Banner({ delay, grid, index, link, textTop1, textTop2, textBottom }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Paragraph {...grid} delay={delay}>
      <TextTop1 delay={delay}>
        <>
          {textTop1}{" "}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Link />
            </a>
          ) : null}
        </>
      </TextTop1>
      <TextTop2 delay={delay}>{textTop2}</TextTop2>
      <TextTop theme={theme} delay={delay} />
      <TextBottom delay={delay}>{textBottom}</TextBottom>
    </Paragraph>
  );
}

export default Banner;
