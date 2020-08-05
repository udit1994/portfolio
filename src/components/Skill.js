import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "context/ThemeContext";
import { ReactComponent as Badminton } from "assets/badminton.svg";

const shineAnimation = keyframes` {
  0% {
    background-position: -500%;
  }
  50% {
    background-size: 99%;
  }
  100% {
    background-position: 100%;
    background-size: 100%;
  }
`;

const Text = styled.p`
  top: ${(props) => props.cordinate.x}%;
  left: ${(props) => props.cordinate.y}%;
  font-size: 2em;
  position: fixed;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  overflow: hidden;
  background: linear-gradient(90deg, #fff, #fff, #fff);
  background-repeat: no-repeat;
  background-size: 0%;
  animation: ${shineAnimation} 0.25s ${(props) => props.delay * 0.35}s linear
    forwards;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

const cordinates = [
  [10, 45],
  [30, 35],
  [30, 55],
  [50, 25],
  [50, 40],
  [50, 55],
  [50, 70],
  [70, 15],
  [70, 35],
  [70, 50],
  [70, 75],
];

const list = Object.freeze([
  "javascript",
  "react js",
  "redux",
  "Node js",
  "html",
  "css",
  "graphql",
  "System Design",
  "Webpack",
  "Design Pattern",
  <Badminton />,
]);

function Skill() {
  const theme = useContext(ThemeContext);

  const newList = list.map((child, i) => {
    const [x, y] = cordinates[i];

    return (
      <Text theme={theme} cordinate={{ x: x, y: y }} key={i} delay={i + 1}>
        {child}
      </Text>
    );
  });

  return <>{newList}</>;
}

export default Skill;
