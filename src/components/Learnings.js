import React from "react";
import styled from "styled-components";

import Anchor from "./styled/Anchor";
import tech from "content/learnings";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  margin: 0 0.2rem;
  white-space: nowrap;
`;

function Learnings() {
  return (
    <Container>
      {tech.map((ele) => (
        <Title key={ele.title}>
          <Anchor href={ele.link} target="_blank" rel="noopener noreferrer">
            {ele.title}
          </Anchor>
        </Title>
      ))}
    </Container>
  );
}

export default Learnings;
