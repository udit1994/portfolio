import React, { useContext } from "react";
import Media from "react-media";
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

const MobileWrapper = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.color},
    ${(props) => props.theme.color},
    ${(props) => props.theme.color}
  );
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
  javascript: [1, 3, 6, 8],
  "react js": [3, 5, 5, 7],
  redux: [3, 5, 7, 9],
  "Node js": [5, 7, 3, 5],
  html: [5, 7, 5, 7],
  css: [5, 7, 7, 9],
  graphql: [5, 7, 9, 11],
  "Design Patterns": [7, 9, 3, 5],
  "data structures": [7, 9, 5, 7],
  algorithms: [7, 9, 7, 9],
  badminton: [7, 9, 9, 11],
};

function Skill() {
  const { theme } = useContext(ThemeContext);

  return React.Children.toArray(
    Object.keys(skillsWithCoordinates).map((skill, i) => {
      const [rowStart, rowEnd, columnStart, columnEnd] = skillsWithCoordinates[
        skill
      ];

      return (
        <Media
          queries={{
            small: "(max-width: 1023px)",
          }}
        >
          {(match) => {
            const Component = match.small ? MobileWrapper : Wrapper;

            return (
              <Component
                coordinate={{ rowStart, rowEnd, columnStart, columnEnd }}
              >
                <Text theme={theme} delay={i + 1}>
                  {skill === "badminton" ? <PlayBadminton /> : skill}
                </Text>
              </Component>
            );
          }}
        </Media>
      );
    })
  );
}

export default Skill;
