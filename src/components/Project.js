import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

import { ReactComponent as Link } from "assets/hyperlink.svg";
import projects from "content/projects";
import ThemeContext from "contexts/ThemeContext";

const Wrapper = styled.div`
  align-self: center;
  grid-column-end: 10;
  grid-column-start: 4;
  grid-row-end: 10;
  grid-row-start: 4;

  @media only screen and (max-width: 1023px) {
    height: 100%;
  }
`;

const Container = styled.div`
  height: calc(100vh - 300px);
  width: 100%;

  @media only screen and (max-width: 1023px) {
    height: 100%;
  }
`;

const animate = keyframes`
   50% { 
    opacity: 0.9;
    transform: translate3d(0, -40%, 0); 
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Section = styled.div`
  animation: ${animate} 2s linear forwards;
  opacity: 0;
  border-top: 3px solid;
  border-width: 3px;
  color: ${(props) => props.theme.color};
  font-size: 1em;
  padding: 30px;
  position: relative;
  border-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  border-image-slice: 1;
  transform: translate3d(0, 0, 0);

  @media only screen and (max-width: 1023px) {
    animation-play-state: paused;
    border-width: 0px;
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:before {
    content: "${(props) => props.year}";
    font-size: 0.9em;
    opacity: 0.7;
    position: absolute;
  }

  &:nth-child(odd) {
    border-right: 3px solid;
    margin-right: 20px;
    padding-left: 10px;

    &:before {
      right: -15px;
    }
  }

  &:nth-child(even) {
    border-left: 3px solid;
    padding-right: 10px;
    margin-left: 20px;

    &:before {
      left: -15px;
    }
    > div:first-child {
      > span {
        order: 1;
        margin-left: 20px;
      }
    }
  }

  &:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  &:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Title = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2em;
  height: 100px;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const HyperLink = styled.a`
  padding: 5px;

  > svg {
    fill: ${(props) => props.theme.color};
    height: 15px;
    width: 15px;
  }
`;

const Image = styled.img`
  background: ${(props) => props.theme.canvas};
  border-radius: 50%;
  height: 100px;
  object-fit: contain;
  width: 100px;
`;

function Project() {
  const { theme } = useContext(ThemeContext);
  const hideScrollbar = () => <div />;
  return (
    <Wrapper showThumbs={false}>
      <Container theme={theme}>
        <Scrollbars
          renderTrackHorizontal={hideScrollbar}
          renderTrackVertical={hideScrollbar}
        >
          {projects.map(
            (
              { description: { main, bullets }, title, link, image, year },
              i
            ) => (
              <Section key={`content-${i}`} year={year}>
                <Title>
                  <span>
                    {link && (
                      <HyperLink
                        href={link}
                        rel="noopener noreferrer"
                        target="_blank"
                        theme={theme}
                      >
                        <Link />
                      </HyperLink>
                    )}
                    {title}
                  </span>
                  <Image
                    alt=""
                    onDrag={(e) => e.preventDefault()}
                    src={image}
                    theme={theme}
                  ></Image>
                </Title>
                <p style={{ textAlign: "justify" }}></p>
                {main}
                <ul>
                  {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </Section>
            )
          )}
        </Scrollbars>
      </Container>
    </Wrapper>
  );
}

export default Project;
