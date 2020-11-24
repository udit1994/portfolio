import { Scrollbars } from "react-custom-scrollbars";
import React from "react";
import styled from "styled-components";

import Anchor from "components/styled/Anchor";
import projects from "content/projects";

const Article = styled.article`
  border-color: #ffdee9;
  border-radius: 1rem;
  border-width: 0.2rem;
  margin: 0 4rem 4rem;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  padding: 0 1rem;
  position: relative;
  text-align: left;

  &:before {
    color: #000000;
    content: "${(props) => props.year}";
    font-size: 0.9rem;
    opacity: 0.7;
    position: absolute;
    top: 1rem;
  }

  &:nth-child(odd) {
    border-right-style: solid;

    &:before {
      right: -15px;
    }
  }

  &:nth-child(even) {
    border-left-style: solid;

    &:before {
      left: -15px;
    }
  }
`;

const Heading = styled.p`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: space-between;
  padding: 0 0 0.5rem;
`;

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 1rem #ffffff;
  height: 8rem;
  object-fit: contain;
  padding: 0.2rem;
  width: 8rem;
`;

const hideScrollbar = () => <div />;

function Journey(props) {
  return (
    <Scrollbars
      renderTrackHorizontal={hideScrollbar}
      renderTrackVertical={hideScrollbar}
    >
      {projects.map(
        (
          { description: { main, bullets }, title, link, image, year },
          index
        ) => {
          const projectName = (
            <span>
              {" "}
              {link ? (
                <Anchor href={link} rel="noopener noreferrer" target="_blank">
                  {title}
                </Anchor>
              ) : (
                title
              )}
            </span>
          );

          const companyImage = image ? <Image alt="" src={image} /> : null;

          return (
            <Article
              key={`content-${index}`}
              opacity={props.opacity}
              year={year}
            >
              <Heading>
                {projectName}
                {companyImage}
              </Heading>
              <p style={{ textAlign: "left", maxWidth: "60rem" }}>{main}</p>
              <ul style={{ listStyleType: "circle" }}>
                {bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </Article>
          );
        }
      )}
    </Scrollbars>
  );
}

export default Journey;
