import Media from "react-media";
import React, { Fragment } from "react";
import styled from "styled-components";

import Banner from "components/Banner";
import projects from "content/projects";

const Wrapper = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  grid-column-end: 11;
  grid-column-start: 3;
  grid-row-end: 12;
  grid-row-start: 2;
  justify-content: space-between;
`;

function Project() {
  const items = projects.map((project, i) => {
    return <Banner content={project} key={i} />;
  });

  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) => {
        const Component = match.small ? Fragment : Wrapper;

        return <Component>{items}</Component>;
      }}
    </Media>
  );
}

export default Project;
