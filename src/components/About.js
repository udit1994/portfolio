import React from "react";
import styled, { keyframes } from "styled-components";

import self from "assets/self.jpg";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  opacity: ${(props) => (props.opacity ? 0 : 1)};
`;

const image = keyframes`
  50% {
    box-shadow: 0 0 .5rem #ffffff;
  }
  75% {
    box-shadow: 0 0 .99rem #ffffff;
    transform: translatey(0);
  }
  100% {
    box-shadow: 0 0 1rem #ffffff;
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
`;

const desc = {
  __html: `I am Udit Kaushik, a result oriented software developer, based in Bengaluru, India.
  <br />
  Interested in bringing innovative ideas to life. Javascript is my new found love.
`,
};

function About(props) {
  return (
    <Wrapper opacity={props.opacity}>
      <div>
        <p title="greeting">Hey there,</p>
        <Description dangerouslySetInnerHTML={desc} />
      </div>
      <Image src={self} alt="Udit's" />
    </Wrapper>
  );
}

export default About;
