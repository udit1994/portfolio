import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "contexts/ThemeContext";
import { ReactComponent as HyperLink } from "assets/link.svg";

const Paragraph = styled.div`
  align-self: center;
  grid-column-end: ${(props) => props.columnEnd || "6"};
  grid-column-start: ${(props) => props.columnStart || "3"};
  grid-row-end: ${(props) => props.rowEnd || "6"};
  grid-row-start: ${(props) => props.rowStart || "4"};
  justify-self: start;
`;

const animateTitle = keyframes`
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

const Title = styled.div`
  animation: ${animateTitle};
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 10px;
  transform: translate(0, 100%);
  white-space: nowrap;
`;

const animateDescription = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Description = styled.div`
  animation: ${animateDescription};
  animation-duration: 0.5s;
  animation-delay: ${(props) => (props.delay ? "1.5s" : "1.5s")};
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);
`;

const animateDivider = keyframes`
  from {
    width: 0%
  }
  to {
    width: 100%
  }
`;

const Divider = styled.div`
  animation: ${animateDivider};
  animation-duration: 1s;
  animation-delay: ${(props) => (props.delay ? "2s" : "0.75s")};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const animateFooter = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Footer = styled.div`
  animation: ${animateFooter};
  animation-duration: 0.75s;
  animation-delay: ${(props) => (props.delay ? "2.25s" : "2.0s")};
  animation-fill-mode: forwards;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

function Banner({ delay, description, footer, grid, link, title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Paragraph {...grid} delay={delay}>
      <Title delay={delay} theme={theme}>
        {`${title} `}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <HyperLink />
          </a>
        ) : (
          ""
        )}
      </Title>
      <Description delay={delay}>{description.main}</Description>
      <Divider delay={delay} theme={theme} />
      <Footer delay={delay}>{footer}</Footer>
    </Paragraph>
  );
}

export default Banner;
