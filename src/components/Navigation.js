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

function Navigation({ showMenu, setDisplayMenu }) {
  const location = useLocation();

  return (
    <Modal show={showMenu} onClick={setDisplayMenu}>
      <List>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/"}
            key="/"
            onClick={setDisplayMenu}
            to="/"
          >
            HOME
          </MyNavLink>
        </ListItem>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/journey"}
            key="/"
            onClick={setDisplayMenu}
            to="/journey"
          >
            JOURNEY
          </MyNavLink>
        </ListItem>
      </List>
    </Modal>
  );
}

export default Navigation;
