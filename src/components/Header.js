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
  @media only screen and (max-width: 1024px) {
    grid-column-end: 6;
    grid-column-start: 2;
  }
`;

const Role = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
  grid-column-end: 13;
  grid-column-start: 10;
  grid-row-end: 2;
  grid-row-start: 1;
  justify-self: center;
  @media only screen and (max-width: 1024px) {
    white-space: nowrap;
    grid-column-end: 13;
    grid-column-start: 7;
    grid-row-end: 2;
    grid-row-start: 1;
    justify-self: start;
  }
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
