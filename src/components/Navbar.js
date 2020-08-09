import React, { useContext } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import ThemeContext from "contexts/ThemeContext";

const NavLinkWrapper = styled.div`
  position: fixed;
  left: 82px;
  height: 150px;
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
`;

const Bullet = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.color};
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;

const Topic = styled.span`
  color: ${(props) => props.theme.color};
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  transition: transform 0.1s;
  transform-origin: left;
  text-decoration: none;
  &.${activeClassName} {
    transform: scale(1.5, 1.5);
  }
  &:hover {
    transform: scale(1.7, 1.7);
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLinkWrapper>
      <StyledNavLink to="/portfolio" exact>
        <Bullet theme={theme} />
        <Topic theme={theme}>About me</Topic>
      </StyledNavLink>

      <StyledNavLink to="/portfolio/projects">
        <Bullet theme={theme} />
        <Topic theme={theme}>Projects</Topic>
      </StyledNavLink>

      <StyledNavLink to="/portfolio/skill">
        <Bullet theme={theme} />
        <Topic theme={theme}>Skills</Topic>
      </StyledNavLink>
      <StyledNavLink to="/portfolio/contact">
        <Bullet theme={theme} />
        <Topic theme={theme}>Contact</Topic>
      </StyledNavLink>
    </NavLinkWrapper>
  );
};

export default Home;
