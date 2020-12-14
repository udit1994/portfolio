import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import Modal from "components/styled/Modal";

const List = styled.ul`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const ListItem = styled.li`
  min-height: 5rem;
`;

const MyNavLink = styled(NavLink)`
  color: #000000;
  font-size: 1.5rem;
  text-decoration: none;

  &.active {
    color: #0000ff;
  }

  :hover {
    color: #0000ff;
  }
`;

function Navigation({ showMenu, setDisplayMenu }) {
  const location = useLocation();

  return (
    <Modal show={showMenu} onClick={setDisplayMenu}>
      <List onClick={(e) => e.stopPropagation()}>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/"}
            key="/"
            onClick={setDisplayMenu}
            to="/"
          >
            /home
          </MyNavLink>
        </ListItem>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/projects"}
            key="/"
            onClick={setDisplayMenu}
            to="/projects"
          >
            /projects
          </MyNavLink>
        </ListItem>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/hobby-projects"}
            key="/"
            onClick={setDisplayMenu}
            to="/hobby-projects"
          >
            /hobby-projects
          </MyNavLink>
        </ListItem>
      </List>
    </Modal>
  );
}

export default Navigation;
