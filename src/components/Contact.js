import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "context/ThemeContext";

const shine = keyframes`
0% {
    color: ${(props) => props.theme.backgroundColor};
    text-shadow: none;
  }
  100% {
    color: ${(props) => props.theme.color};
    text-shadow: 0 0 10px ${(props) => props.theme.color};
  }
  `;

const blink = keyframes`
  0%,
  22%,
  36%,
  75% {
    color: ${(props) => props.theme.color};
    text-shadow: 0 0 10px ${(props) => props.theme.color};
  }
  28%,
  33% {
    color: ${(props) => props.theme.color};
    text-shadow: none;
  }
  82%,
  97% {
    color: ${(props) => props.theme.color};
    text-shadow: none;
  }
`;

const flicker = keyframes`
  from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }
`;

const Flicker = styled.span`
  animation: ${shine} 2s forwards, ${blink} 3s 2s infinite;
`;

const FastFlicker = styled.span`
  animation: ${shine} 2s forwards, ${blink} 10s 1s infinite;
`;

const Sign = styled.div`
  align-self: center;
  animation: ${shine} 2s forwards, ${flicker} 3s infinite;
  color: ${(props) => props.theme.color};
  font-size: 3em;
  grid-column-end: 8;
  grid-column-start: 6;
  grid-row-end: 7;
  grid-row-start: 6;
  justify-self: center;
  text-shadow: 0 0 7px ${(props) => props.theme.color};
`;

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <Sign theme={theme}>
      <a
        href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio"
        style={{ textDecoration: "none", color: theme.color }}
      >
        <FastFlicker>u</FastFlicker>ditkaushik<Flicker>94</Flicker>@gmail.com
      </a>
    </Sign>
  );
}

export default Contact;
