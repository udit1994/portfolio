import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  100% {
    transform: translatey(4rem);
  }
`;

const NavigationList = styled.ol`
  animation: ${slideUp} 0.5s linear forwards;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(155, 155, 155, 0.7));
  display: ${(props) => (props.show ? "block" : "none")};
  height: 100%;
  padding-top: 10%;
  position: fixed;
  text-align: center;
  transform: translatey(100rem);
  width: 100%;
  z-index: 1;
`;

const ListItem = styled.li`
  min-height: 5rem;
`;

const MyNavLink = styled(NavLink)`
  color: #000000;
  font-size: 2rem;
  text-decoration: none;

  &.active {
    color: #0000ff;
  }

  :hover {
    color: #0000ff;
  }
`;

function Navigation({ showMenu, handleClick }) {
  const location = useLocation();

  return (
    <NavigationList show={showMenu}>
      <ListItem>
        <MyNavLink
          isActive={() => location.pathname === "/"}
          key="/"
          onClick={handleClick}
          to="/"
        >
          HOME
        </MyNavLink>
      </ListItem>
      <ListItem>
        <MyNavLink
          isActive={() => location.pathname === "/journey"}
          key="/"
          onClick={handleClick}
          to="/journey"
        >
          JOURNEY
        </MyNavLink>
      </ListItem>
    </NavigationList>
  );
}

export default Navigation;
