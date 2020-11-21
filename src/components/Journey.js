import React from "react";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

import projects from "content/projects";
import Anchor from "components/styled/Anchor";

const Article = styled.article`
  border-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  border-width: 0.2rem;
  padding: 4rem;
  margin: 0 4rem;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  position: relative;
  text-align: left;
  -webkit-border-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  border-image-slice: 1;
  -wekit-border-image-slice: 1;
  -moz-border-image-slice: 1;

  &:before {
    content: "${(props) => props.year}";
    font-size: 0.9rem;
    opacity: 0.7;
    position: absolute;
  }

  &:nth-child(odd) {
    border-bottom: 0;
    border-left: 0;
    border-right: 0.2rem solid;
    border-top: 0.2rem solid;
    margin: 0 1rem;

    &:before {
      right: -15px;
    }
  }

  &:nth-child(even) {
    border-bottom: 0;
    border-left: 3px solid;
    border-right: 0;
    border-top: 3px solid;
    margin: 0 1rem;

    &:before {
      left: -15px;
    }
  }

  &:first-child {
    border-top: 0;
  }
`;

const Heading = styled.p`
  align-items: center;
  display: flex;
  font-size: 1.2em;
  height: 100px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 1rem;
  width: 100%;
`;

const Image = styled.img`
  background: "1e1b34";
  border-radius: 50%;
  box-shadow: 0 0 1rem #ffffff;
  height: 100px;
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
              <p style={{ textAlign: "justify" }}>{main}</p>
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
