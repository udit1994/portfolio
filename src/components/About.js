import React from "react";
import styled from "styled-components";

import Learning from "components/Learnings";
import self from "assets/self.jpg";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;
  opacity: ${(props) => (props.opacity ? 0 : 1)};

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 0 0 0.5rem #000000;
  height: 12rem;
  object-fit: cover;
  width: 12rem;
  filter: grayscale(100%);
`;

function About(props) {
  return (
    <Wrapper opacity={props.opacity}>
      <p>
        Hi there,
        <br />I am <u>Udit Kaushik</u>, a result oriented software developer,
        based in Bengaluru, India.
        <br />
        Interested in bringing innovative ideas to life.
      </p>
      <Image src={self} alt="Udit's" width="15rem" height="15rem" />
      <Learning />
    </Wrapper>
  );
}

export default About;
