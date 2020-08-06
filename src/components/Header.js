import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "context/ThemeContext";

const Name = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
  grid-column-end: 4;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-row-start: 1;
  justify-self: start;
`;

const Role = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
  grid-column-end: 13;
  grid-column-start: 10;
  grid-row-end: 2;
  grid-row-start: 1;
  justify-self: center;
`;

function Header(props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Name theme={theme}>UDIT KAUSHIK</Name>
      <Role theme={theme}>Web Developer(Frontend)</Role>
    </>
  );
}

export default Header;
