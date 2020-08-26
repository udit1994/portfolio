import React, { Fragment } from "react";
import Media from "react-media";
import styled, { keyframes } from "styled-components";

import Banner from "components/Banner";
import self from "assets/self.jpg";

const animateImage = keyframes`
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Image = styled.img`
  animation: ${animateImage} 2s 1s linear forwards;
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

  transform: translate(0, -500px);
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

function About() {
  return (
    <>
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
                  title: "Hey there,",
                  description:
                    "I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.",
                  vision:
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
