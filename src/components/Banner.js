import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "contexts/ThemeContext";
import { ReactComponent as HyperLink } from "assets/link.svg";

const Paragraph = styled.div`
  grid-column-end: 7;
  grid-column-start: 4;
  grid-row-end: 6;
  grid-row-start: 4;
`;

const title = keyframes`
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
  animation: ${title};
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 10px;
  transform: translate(0, 100%);
  background-image: ${(props) =>
      props.theme.color === "#000000"
        ? "linear-gradient(90deg, #8b00ff, #000000);"
        : "linear-gradient(90deg, #ffffff, #8b00ff);"}
    linear-gradient(90deg, #ffffff, #8b00ff);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
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

const Description = styled.div`
  animation: ${description};
  animation-duration: 0.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
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
  animation-delay: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const footer = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Footer = styled.div`
  animation: ${footer};
  animation-duration: 0.75s;
  animation-delay: 2.25s;
  animation-fill-mode: forwards;
  margin-bottom: 50px;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

function Banner({ content: { description, vision, title } }) {
  const { theme } = useContext(ThemeContext);
  console.log(title);

  return (
    <Paragraph>
      <Title theme={theme}>{title}</Title>
      <Description>{description}</Description>
      <Divider theme={theme} />
      <Footer>{vision}</Footer>
    </Paragraph>
  );
}

export default Banner;
