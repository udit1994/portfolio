import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "contexts/ThemeContext";
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
  from { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const ShowBottomText = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Title = styled.div`
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation: ${ShowTopText1};
  margin-bottom: 10px;
  opacity: 0;
  transform: translate(0, 100%);
  white-space: nowrap;
`;

const Description = styled.div`
  animation: ${ShowTopText2};
  animation-duration: 0.5s;
  animation-delay: ${(props) => (props.delay ? "1.5s" : "1.5s")};
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
`;

const Divider = styled.div`
  animation: ${animateLine};
  animation-duration: 1s;
  animation-delay: ${(props) => (props.delay ? "2s" : "0.75s")};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const Footer = styled.div`
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
      <Title delay={delay}>
        {`${textTop1} ${
          link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Link />
            </a>
          )
        }`}
      </Title>
      <Description delay={delay}>{textTop2}</Description>
      <Divider delay={delay} theme={theme} />
      <Footer delay={delay}>{textBottom}</Footer>
    </Paragraph>
  );
}

export default Banner;
