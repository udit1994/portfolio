import React, { useContext, useState } from "react";
import Media from "react-media";
import styled from "styled-components";
import { ReactComponent as Burger } from "assets/burger.svg";
import { NavLink } from "react-router-dom";

import Modal from "components/Modal";
import ThemeContext from "contexts/ThemeContext";
import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Google } from "assets/email.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";

const NavLinkWrapper = styled.div`
  position: fixed;
  left: 82px;
  height: 150px;
  top: calc(50% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.canvas};
  border-radius: 50%;
  bottom: 17px;
  box-shadow: 0 0 4px 1px white;
  display: flex;
  left: calc(50% - 25px);
  position: fixed;
  z-index: 50;
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

const MobileNavLink = styled(NavLink).attrs({ activeClassName })`
  height: 50px;
  font-size: 1.5em;
  margin-bottom: 5px;
  transition: transform 0.1s;
  transform-origin: left;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  &.${activeClassName} {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.canvas};
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;

  > a {
    transform: scale(1.5);
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) =>
        match.small ? (
          <>
            <BurgerWrapper theme={theme}>
              <Burger onClick={openModal} />
            </BurgerWrapper>
            <Modal show={isModalOpen} onCloseModal={closeModal}>
              <MobileWrapper>
                <MobileNavLink to="/" exact theme={theme} onClick={closeModal}>
                  About me
                </MobileNavLink>
                <MobileNavLink
                  to="/projects"
                  theme={theme}
                  onClick={closeModal}
                >
                  Projects
                </MobileNavLink>
                <MobileNavLink to="/skills" theme={theme} onClick={closeModal}>
                  Skills
                </MobileNavLink>
                <ContactWrapper>
                  <a
                    href="https://github.com/udit1994"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="mailto:uditkaushik94@gmail.com?subject=Mail from Portfolio">
                    <Google />
                  </a>
                  <a
                    href="https://twitter.com/uditkaushik94"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </ContactWrapper>
              </MobileWrapper>
            </Modal>
          </>
        ) : (
          <NavLinkWrapper>
            <StyledNavLink to="/" exact>
              <Bullet theme={theme} />
              <Topic theme={theme}>About me</Topic>
            </StyledNavLink>

            <StyledNavLink to="/projects">
              <Bullet theme={theme} />
              <Topic theme={theme}>Projects</Topic>
            </StyledNavLink>

            <StyledNavLink to="/skills">
              <Bullet theme={theme} />
              <Topic theme={theme}>Skills</Topic>
            </StyledNavLink>
            <StyledNavLink to="/contact-me">
              <Bullet theme={theme} />
              <Topic theme={theme}>Contact</Topic>
            </StyledNavLink>
          </NavLinkWrapper>
        )
      }
    </Media>
  );
};

export default Home;
