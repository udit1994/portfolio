import React from "react";
import styled, { keyframes } from "styled-components";

import self from "assets/self.jpg";
import Learning from "components/Learning";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
  width: 100%;
`;

const description = keyframes`
  0% { 
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;

const Description = styled.p`
  animation: ${description} 0.75s 1.25s linear forwards;
  opacity: 0;
  width: 100%;
`;

const image = keyframes`
  50% {
    box-shadow: 0 0 .25rem #ffffff;
  }
  75% {
    box-shadow: 0 0 .45rem #ffffff;
    transform: translatey(0);
  }
  100% {
    box-shadow: 0 0 0.5rem #ffffff;
    transform: translatey(0);
  }
`;

const Image = styled.img`
  animation: ${image} 2s linear forwards;
  border-radius: 50%;
  height: 15rem;
  object-fit: cover;
  padding: 0.2rem;
  position: relative;
  transform: translatey(-40rem);
  width: 15rem;
`;

const desc = {
  __html: `I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.
  <br />
  Interested in bringing innovative ideas to life.`,
};

function About(props) {
  return (
    <Wrapper opacity={props.opacity}>
      <div>
        <p title="greeting">Hey there,</p>
        <Description dangerouslySetInnerHTML={desc} />
      </div>
      <Image src={self} alt="Udit's" />
      <Learning />
    </Wrapper>
  );
}

export default About;
