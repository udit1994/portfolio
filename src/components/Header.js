import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "context/ThemeContext";

const Name = styled.span`
  position: fixed;
  color: ${(props) => props.theme.color};
  top: 4%;
  left: 10%;
`;

const Role = styled.span`
  position: fixed;
  color: ${(props) => props.theme.color};
  top: 4%;
  left: 80%;
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
