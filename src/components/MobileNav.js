import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import styled from "styled-components";

import { ReactComponent as MenuIcon } from "assets/menuIcon.svg";
import Modal from "components/Modal";
import routes from "content/routes";
import SocialLinks from "components/SocialLinks";
import ThemeContext from "contexts/ThemeContext";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Menu = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.canvas};
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
  display: flex;
  left: calc(50% - 32px);
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
  border-radius: 30px;
  color: ${(props) => props.theme.color};
  display: flex;
  font-size: 1.5em;
  height: 50px;
  justify-content: center;
  margin-bottom: 15px;
  text-decoration: none;
  transform-origin: left;
  transition: transform 0.1s;
  width: 100%;

  &.active {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.canvas};
  }
`;

function MobileNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Menu theme={theme}>
        <MenuIcon onClick={openModal} />
      </Menu>
      <Modal show={isModalOpen} onCloseModal={closeModal}>
        <Wrapper>
          {routes
            .filter(({ to }) => to !== "#contact-me")
            .map(({ to, text }) => (
              <MyNavLink
                to={`/${to}`}
                theme={theme}
                onClick={closeModal}
                key={to}
              >
                {text}
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
