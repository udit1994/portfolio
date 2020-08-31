import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as MenuIcon } from "assets/menuIcon.svg";
import Modal from "components/Modal";
import routes from "content/routes";
import SocialLinks from "components/SocialLinks";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Menu = styled.div`
  align-items: center;
  background-color: "#1e1b34";
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
  display: flex;
  left: calc(50% - 25px);
  position: fixed;
  z-index: 50;
`;

const Contacts = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;

  > a {
    transform: scale(1.5);
  }
`;

const MyNavLink = styled(NavLink)`
  align-items: center;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  display: flex;
  font-size: 1.5em;
  height: 40px;
  justify-content: center;
  margin-bottom: 20px;
  text-decoration: none;
  transform-origin: left;
  transition: transform 0.1s;
  width: 100%;

  &.active {
    background-color: white;
    color: black;
  }
`;

const Hamburger = styled(MenuIcon)`
  width: 50px;
  height: 50px;
`;

function MobileNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hash } = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Menu>
        <Hamburger onClick={openModal} />
      </Menu>
      <Modal show={isModalOpen} onCloseModal={closeModal}>
        <Wrapper>
          {routes.map(({ to, text }) => (
            <MyNavLink
              isActive={() => hash === to}
              to={`/${to}`}
              onClick={closeModal}
              key={to}
            >
              {text.toLocaleUpperCase()}
            </MyNavLink>
          ))}
          <Contacts>
            <SocialLinks />
          </Contacts>
        </Wrapper>
      </Modal>
    </>
  );
}

export default MobileNav;
