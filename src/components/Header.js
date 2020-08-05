import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "context/ThemeContext";

const Name = styled.span`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: start;
  align-self: center;
  color: ${(props) => props.theme.color};
`;

const Role = styled.span`
  grid-column-start: 10;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: center;
  align-self: center;
  color: ${(props) => props.theme.color};
`;

function Header(props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Name theme={theme}>UDIT KAUSHIK</Name>
      <Role theme={theme}>Software Engineer</Role>
    </>
  );
}

export default Header;
