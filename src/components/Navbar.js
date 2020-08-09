import React, { useContext } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import ThemeContext from "contexts/ThemeContext";

const PageIcon = styled.div`
  background-color: ${(props) => props.theme.color};
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  height: 10px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-top: 20px;
  padding-left: 10px;
  transition: transform 0.1s;
  white-space: nowrap;
  width: 10px;
  &:hover {
    transform: scale(1.7, 1.7);
  }
`;

const NavLinkWrapper = styled.div`
  align-content: spaced-around;
  align-self: center;
  display: flex;
  flex-direction: column;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 13;
  grid-row-start: 1;
  justify-self: center;
  margin-left: 20px;
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  z-index: 10;
  text-decoration: none;
  transform: scale(1, 1);

  &.${activeClassName} {
    > div {
      transform: scale(1.5, 1.5);
    }
    > div:hover {
      transform: scale(1.7, 1.7);
    }
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavLinkWrapper>
      <StyledNavLink to="/portfolio" exact>
        <PageIcon content="" theme={theme}>
          About me
        </PageIcon>
      </StyledNavLink>
      <StyledNavLink to="/portfolio/projects">
        <PageIcon content="" theme={theme}>
          Projects
        </PageIcon>
      </StyledNavLink>
      <StyledNavLink to="/portfolio/skill">
        <PageIcon content="" theme={theme}>
          Skills
        </PageIcon>
      </StyledNavLink>
      <StyledNavLink to="/portfolio/contact">
        <PageIcon theme={theme}>Contact</PageIcon>
      </StyledNavLink>
    </NavLinkWrapper>
  );
};

export default Home;
