import { NavLink, useLocation } from "react-router-dom";
import Media from "react-media";
import React, { useContext } from "react";
import styled from "styled-components";

import MobileNav from "components/MobileNav";
import ThemeContext from "contexts/ThemeContext";
import routes from "content/routes";

const Wrapper = styled.div`
  position: fixed;
  left: 82px;
  height: 100px;
  top: calc(50% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

// Make bullets pseudo elements
const Bullet = styled.div`
  background-color: ${(props) => props.theme.color};
  border-radius: 50%;
  color: ${(props) => props.theme.color};
  display: inline-block;
  height: 10px;
  margin-right: 5px;
  width: 10px;
`;

const Topic = styled.span`
  color: ${(props) => props.theme.color};
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
  transform-origin: left;
  transition: transform 0.1s;
  &.active {
    transform: scale(1.5, 1.5);
  }
  &:hover {
    transform: scale(1.7, 1.7);
  }
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { hash } = useLocation();

  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) =>
        match.small ? (
          <MobileNav theme={theme} />
        ) : (
          <Wrapper>
            {routes.map(({ to, text }) => (
              <MyNavLink to={`/${to}`} isActive={() => hash === to} key={to}>
                <Bullet theme={theme} />
                <Topic theme={theme}>{text}</Topic>
              </MyNavLink>
            ))}
          </Wrapper>
        )
      }
    </Media>
  );
};

export default Home;
