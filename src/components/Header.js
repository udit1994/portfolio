import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import Media from "react-media";

import ThemeContext from "contexts/ThemeContext";

const Name = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
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
  color: ${(props) => props.theme.color};
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

function Header(props) {
  const theme = useContext(ThemeContext);

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
            <Name theme={theme}>UDIT KAUSHIK</Name>
            <Role theme={theme}>WEB DEVELOPER</Role>
          </Component>
        );
      }}
    </Media>
  );
}

export default Header;
