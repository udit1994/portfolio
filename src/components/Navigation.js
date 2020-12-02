import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  100% { 
    transform: translatey(6rem);
  }
`;

const NavigationList = styled.ul`
  animation: ${slideUp} 0.5s linear forwards;
  background-image: linear-gradient(rgba(0, 0, 255, 0), rgba(255, 255, 255, 1));
  display: ${(props) => (props.show ? "block" : "none")};
  height: 100%;
  list-style-type: none;
  position: fixed;
  transform: translatey(100rem);
  width: 100%;
  padding: 0 10%;
  z-index: 1;
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  height: 20%;
`;

const MyNavLink = styled(NavLink)`
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;

  &.active {
    color: #000000;
  }

  :hover {
    color: #000000;
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
          # Home
        </MyNavLink>
      </ListItem>
      <ListItem>
        <MyNavLink
          isActive={() => location.pathname === "/journey"}
          key="/"
          onClick={handleClick}
          to="/journey"
        >
          # Projects
        </MyNavLink>
      </ListItem>
    </NavigationList>
  );
}

export default Navigation;
