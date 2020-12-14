import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import Modal from "components/styled/Modal";

const List = styled.ul`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 40%;
  transform: translate(-50%, -50%);
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

function Navigation({ setDisplayNav }) {
  const location = useLocation();

  return (
    <Modal onClick={setDisplayNav}>
      <List onClick={(e) => e.stopPropagation()}>
        <ListItem>
          <MyNavLink
            isActive={() =>
              !["/projects", "/hobby-projects"].includes(location.pathname)
            }
            key="/"
            onClick={setDisplayNav}
            to="/"
          >
            /home
          </MyNavLink>
        </ListItem>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/projects"}
            key="/projects"
            onClick={setDisplayNav}
            to="/projects"
          >
            /projects
          </MyNavLink>
        </ListItem>
        <ListItem>
          <MyNavLink
            isActive={() => location.pathname === "/hobby-projects"}
            key="/hobby-projects"
            onClick={setDisplayNav}
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
