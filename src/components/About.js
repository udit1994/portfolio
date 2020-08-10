import React, { Fragment, useContext } from "react";
import Media from "react-media";
import styled, { keyframes } from "styled-components";

import Banner from "components/Banner";
import self from "assets/self.jpg";
import ThemeContext from "contexts/ThemeContext";

const animateImage = keyframes`
  to {
    opacity: 1;
  }
`;

const Image = styled.img`
  animation: ${animateImage} 2s linear forwards;
  border-radius: 50%;
  display: block;
  grid-column-end: 11;
  grid-column-start: 8;
  grid-row-end: 8;
  grid-row-start: 2;
  align-self: center;
  max-width: 250px;
  object-fit: contain;
  opacity: 0;
  width: 100%;
  z-index: 10;

  @media only screen and (max-width: 1023px) {
    max-width: 200px;
  }
`;

const animateHLine = keyframes`
  to {
    width: 100%;
  }
`;

const HorizontalLine = styled.div`
  animation: ${animateHLine} 12s linear infinite;
  bottom: 70px;
  height: 1px;
  opacity: 0.5;
  position: fixed;
  width: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.backgroundColor},
    lightblue
  );
`;

const animateVLine = keyframes`
  to {
    height: 100%;
  }
`;

const VerticalLine = styled.div`
  animation: ${animateVLine} 12s linear infinite;
  height: 0;
  opacity: 0.5;
  position: fixed;
  right: 112px;
  width: 1px;
  background-image: linear-gradient(
    ${(props) => props.theme.backgroundColor},
    lightblue
  );
  @media only screen and (max-width: 1023px) {
    right: 70px;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HorizontalLine theme={theme} />
      <VerticalLine theme={theme} />
      <Media
        queries={{
          small: "(max-width: 1023px)",
        }}
      >
        {(match) => {
          const Component = match.small ? MobileWrapper : Fragment;

          return (
            <Component>
              <Image src={self} />
              <Banner
                content={{
                  title: "Hey there!",
                  description: {
                    main:
                      "I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.",
                  },
                  grid: {
                    columnEnd: 7,
                    columnStart: 4,
                    rowEnd: 6,
                    rowStart: 4,
                  },
                  footer:
                    "Interested in bringing innovative ideas to life. Javascript is my new found love.",
                }}
              />
            </Component>
          );
        }}
      </Media>
    </>
  );
}

export default About;
