import React from "react";
import styled from "styled-components";

import * as logos from "assets/logos";

const Wrapper = styled.div`
  grid-column-end: 11;
  grid-column-start: 3;
  grid-row-end: 10;
  grid-row-start: 4;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    height: 100%;
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 4em;
  height: 4em;
  margin: 30px;
  object-fit: contain;
  filter: drop-shadow(0 0 0.25rem white);

  @media only screen and (max-width: 1023px) {
    object-fit: fill;
  }
`;

function Skill() {
  return (
    <Wrapper>
      {Object.values(logos).map((logo, index) => (
        <Logo
          src={logo}
          alt={logo}
          key={index}
          style={
            logo.includes("express") || logo.includes("next")
              ? { backgroundColor: "white", borderRadius: 20, padding: 5 }
              : {}
          }
        />
      ))}
    </Wrapper>
  );
}

export default Skill;
