import { NavLink, useLocation } from "react-router-dom";
import Media from "react-media";
import React from "react";
import styled, { keyframes } from "styled-components";

import MobileNav from "components/MobileNav";
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

const Bullet = styled.div`
  background-color: white;
  border-radius: 50%;
  color: white;
  display: inline-block;
  height: 10px;
  margin-right: 5px;
  width: 10px;
`;

const Topic = styled.span`
  color: white;
  font-family: sans-serif;
`;

const blink = keyframes`
  50% {
    transform: scale(1, 1);
  }
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
  transform-origin: left;
  transition: transform 0.1s;
  &.active {
    transform: scale(1.2, 1.2);

    > div:first-child {
      position: relative;

      &:after {
        animation: ${blink} 2s ease-out infinite;
        background-color: white;
        border-radius: 50%;
        content: "";
        opacity: 0.5;
        position: absolute;
        height: 20px;
        width: 20px;
        transform: scale(0, 0);
        left: -5px;
        top: -5px;
      }
    }
  }
  &:hover {
    transform: scale(1.7, 1.7);
  }
`;

const Home = () => {
  const { hash } = useLocation();

  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) =>
        match.small ? (
          <MobileNav />
        ) : (
          <Wrapper>
            {routes.map(({ to, text }) => (
              <MyNavLink to={`/${to}`} isActive={() => hash === to} key={to}>
                <Bullet />
                <Topic>{text}</Topic>
              </MyNavLink>
            ))}
          </Wrapper>
        )
      }
    </Media>
  );
};

export default Home;
