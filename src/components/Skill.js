import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "context/ThemeContext";
import { ReactComponent as Badminton } from "assets/badminton.svg";

const show = keyframes` {
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

const play = keyframes` {
  0% {
    transform: scale(0, 0)
  }
  50% {
    transform: scale(0.5, 0.5)
  }
  100% {
    transform: scale(1, 1)
  }
`;

const Division = styled.div`
  grid-column-end: ${(props) => props.cordinate.columnEnd};
  grid-column-start: ${(props) => props.cordinate.columnStart};
  grid-row-end: ${(props) => props.cordinate.rowEnd};
  grid-row-start: ${(props) => props.cordinate.rowEnd};
  justify-self: center;
  align-self: center;
`;

const Text = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  overflow: hidden;
  background: linear-gradient(90deg, #fff, #fff, #fff);
  background-repeat: no-repeat;
  background-size: 0%;
  animation: ${show} 0.25s ${(props) => props.delay * 0.35}s linear forwards;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

const PlayBadminton = styled(Badminton)`
  transform: scale(0, 0);
  animation: ${play} 0.2s 4.25s linear forwards;
`;

const cordinates = [
  [2, 4, 6, 8],
  [4, 6, 5, 7],
  [4, 6, 7, 9],
  [6, 8, 3, 5],
  [6, 8, 5, 7],
  [6, 8, 7, 9],
  [6, 8, 9, 11],
  [8, 10, 3, 5],
  [8, 10, 5, 7],
  [8, 10, 7, 9],
  [8, 10, 9, 11],
];

const list = Object.freeze([
  "javascript",
  "react js",
  "redux",
  "Node js",
  "html",
  "css",
  "graphql",
  "Design Patterns",
  "Webpack",
  "System Design",
  <PlayBadminton />,
]);

function Skill() {
  const theme = useContext(ThemeContext);

  const newList = list.map((child, i) => {
    const [rowStart, rowEnd, columnStart, columnEnd] = cordinates[i];

    return (
      <Division cordinate={{ rowStart, rowEnd, columnStart, columnEnd }}>
        <Text theme={theme} key={i} delay={i + 1}>
          {child}
        </Text>
      </Division>
    );
  });

  return <>{newList}</>;
}

export default Skill;
