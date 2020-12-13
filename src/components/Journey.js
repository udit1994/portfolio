import { Scrollbars } from "react-custom-scrollbars";
import React from "react";
import styled from "styled-components";

import Anchor from "components/styled/Anchor";
import projects from "content/projects";

const Article = styled.article`
  background-color: #dddddd;
  border-radius: 20px;
  margin: 1rem 0;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  padding: 1rem;
  }
`;

const Heading = styled.h3`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 7rem;
`;

const Image = styled.img`
  object-fit: contain;
  width: 7rem;
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
                <>
                  <Anchor href={link} rel="noopener noreferrer" target="_blank">
                    {title}{" "}
                  </Anchor>
                  {year}
                </>
              ) : (
                `${title} ${year}`
              )}
            </span>
          );

          const companyImage = image ? <Image alt="" src={image} /> : null;

          return (
            <Article key={`content-${index}`} opacity={props.opacity}>
              <Heading>
                {projectName}
                {companyImage}
              </Heading>
              <p
                style={{
                  maxWidth: "60rem",
                  textAlign: "left",
                }}
              >
                {main}
              </p>
              <br />
              <ul
                style={{ listStyleType: "square", listStylePosition: "inside" }}
              >
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
