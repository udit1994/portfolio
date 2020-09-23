import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  left: 30px;
  position: fixed;
  right: 30px;
  top: 0;
`;

const header = () => `
  align-self: center;
  position: fixed;
  top: 18px;
  
  @media only screen and (max-width: 1023px) {
    font-size: 0.9em;
    position: static;
  }
`;

const Name = styled.p`
  ${header}
  left: 130px;
`;

const Role = styled.p`
  ${header}
  right: 130px;
`;

function Header({ mediaQuery }) {
  const Component = mediaQuery.small ? Wrapper : Fragment;

  return (
    <Component>
      <Name title="name">UDIT KAUSHIK</Name>
      <Role title="role">WEB DEVELOPER</Role>
    </Component>
  );
}

export default Header;
