import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "contexts/ThemeContext";

const Name = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
  position: fixed;
  left: 130px;
  top: 35px;
`;

const Role = styled.span`
  align-self: center;
  color: ${(props) => props.theme.color};
  position: fixed;
  right: 130px;
  top: 35px;
`;

function Header(props) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Name theme={theme}>UDIT KAUSHIK</Name>
      <Role theme={theme}>WEB DEVELOPER</Role>
    </>
  );
}

export default Header;
