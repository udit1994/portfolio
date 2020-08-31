import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";

const Name = styled.span`
  align-self: center;
  color: white;
  position: fixed;
  left: 130px;
  top: 35px;
  @media only screen and (max-width: 1023px) {
    font-size: 0.9em;
    position: static;
  }
`;

const Role = styled.span`
  align-self: center;
  color: white;
  position: fixed;
  right: 130px;
  top: 35px;
  @media only screen and (max-width: 1023px) {
    font-size: 0.9em;
    position: static;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 30px;
  right: 30px;
  top: 0;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

function Header() {
  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) => {
        const Component = match.small ? Wrapper : Fragment;

        return (
          <Component>
            <Name>UDIT KAUSHIK</Name>
            <Role>WEB DEVELOPER</Role>
          </Component>
        );
      }}
    </Media>
  );
}

export default Header;
