import React from "react";
import styled from "styled-components";

import Anchor from "components/styled/Anchor";

const Wrapper = styled.section`
  align-items: space-around;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: center;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  height: 100%;
`;

const Container = styled.div`
  border-radius: 1rem;
  box-shadow: 1px 1px 4px #80d0c7;
  margin: 1rem 3rem;
  padding: 0.5rem 1rem;

  @media only screen and (max-width: 600px) {
    margin: 1rem;
  }
`;

const tech = [
  { title: "Babel", link: "" },
  { title: "Bootstrap", link: "" },
  { title: "CSS", link: "" },
  { title: "ES6", link: "" },
  { title: "Eslint", link: "" },
  { title: "Express", link: "" },
  { title: "Git", link: "" },
  { title: "GraphQL", link: "" },
  { title: "HTML", link: "" },
  { title: "Javascript", link: "" },
  { title: "JSS", link: "" },
  { title: "Mongo", link: "" },
  { title: "Next", link: "" },
  { title: "Node", link: "" },
  { title: "Postgress", link: "" },
  { title: "ReactJS", link: "" },
  { title: "Redux", link: "" },
  { title: "Socket", link: "" },
  { title: "VS code", link: "" },
  { title: "Webpack", link: "" },
];

function Learning(props) {
  return (
    <Wrapper opacity={props.opacity}>
      {tech.map((element) => (
        <Container>
          <Anchor href={element.link}>{element.title}</Anchor>
        </Container>
      ))}
    </Wrapper>
  );
}

export default Learning;
