import React from "react";
import styled, { keyframes } from "styled-components";

import Learning from "components/Learnings";
import self from "assets/self.jpg";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  width: 100%;
`;

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 0.5rem #add8e6;
  height: 15rem;
  object-fit: cover;
  padding: 0.2rem;
  width: 15rem;
`;

function About(props) {
  return (
    <Wrapper opacity={props.opacity}>
      <div>
        <p title="greeting">Hi there,</p>
        <p>
          I am Udit Kaushik, a result oriented software developer, based in
          Bengaluru, India.
          <br />
          Interested in bringing innovative ideas to life.
        </p>
      </div>
      <Image src={self} alt="Udit's" width="15rem" height="15rem" />
      <Learning />
    </Wrapper>
  );
}

export default About;
