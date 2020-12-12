import React from "react";
import styled from "styled-components";

import Anchor from "./styled/Anchor";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  margin: 0 0.2rem;
  white-space: nowrap;
`;

const tech = [
  { title: "CSS", link: "https://www.w3.org/Style/CSS/Overview.en.html" },
  { title: "ES6", link: "http://es6-features.org/#Constants" },
  { title: "Eslint", link: "https://eslint.org/" },
  { title: "Gatsby", link: "https://www.gatsbyjs.com/" },
  { title: "Git", link: "https://github.com/" },
  { title: "GraphQL", link: "https://graphql.org/" },
  { title: "HTML", link: "https://html.spec.whatwg.org/" },
  {
    title: "Javascript",
    link: "https://www.w3.org/standards/webdesign/script.html",
  },
  { title: "Mongo", link: "https://www.mongodb.com/" },
  { title: "NextJS", link: "https://nextjs.org/" },
  { title: "Postgress", link: "https://www.postgresql.org/" },
  { title: "ReactJS", link: "https://reactjs.org/" },
  { title: "Webpack", link: "https://webpack.js.org/" },
];

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
