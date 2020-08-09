import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "contexts/ThemeContext";
import { ReactComponent as Badminton } from "assets/badminton.svg";

const playAnimation = keyframes` {
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

const Wrapper = styled.div`
  align-self: center;
  grid-column-end: ${(props) => props.coordinate.columnEnd};
  grid-column-start: ${(props) => props.coordinate.columnStart};
  grid-row-end: ${(props) => props.coordinate.rowEnd};
  grid-row-start: ${(props) => props.coordinate.rowEnd};
  justify-self: center;
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
  animation: ${playAnimation} 0.2s 4.25s linear forwards;
  transform: scale(0, 0);
`;

const skillsWithCoordinates = {
  javascript: [2, 4, 6, 8],
  "react js": [4, 6, 5, 7],
  redux: [4, 6, 7, 9],
  "Node js": [6, 8, 3, 5],
  html: [6, 8, 5, 7],
  css: [6, 8, 7, 9],
  graphql: [6, 8, 9, 11],
  "Design Patterns": [8, 10, 3, 5],
  "data structures": [8, 10, 5, 7],
  algorithms: [8, 10, 7, 9],
  badminton: [8, 10, 9, 11],
};

function Skill() {
  const theme = useContext(ThemeContext);

  return React.Children.toArray(
    Object.keys(skillsWithCoordinates).map((skill, i) => {
      const [rowStart, rowEnd, columnStart, columnEnd] = skillsWithCoordinates[
        skill
      ];

      return (
        <Wrapper coordinate={{ rowStart, rowEnd, columnStart, columnEnd }}>
          <Text theme={theme} delay={i + 1}>
            {skill === "badminton" ? <PlayBadminton /> : skill}
          </Text>
        </Wrapper>
      );
    })
  );
}

export default Skill;
