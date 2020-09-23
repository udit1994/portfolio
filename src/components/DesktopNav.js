import { NavLink } from "react-router-dom";
import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  left: 88px;
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
  display: inline-block;
  height: 10px;
  margin-right: 5px;
  width: 10px;
`;

const blink = keyframes`
  50% {
    transform: scale(1, 1);
  }
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
  transform-origin: 50% 50%;
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
    transform: scale(1.3, 1.3);
  }
`;

const Text = styled.p`
  display: inline-block;
  margin: 0;
  color: white;
  font-family: sans-serif;
`;

function DesktopNav({ hashRoute, routes }) {
  return (
    <Wrapper>
      {routes.map(({ to, text }) => (
        <MyNavLink to={`/${to}`} isActive={() => hashRoute === to} key={to}>
          <Bullet />
          <Text>{text}</Text>
        </MyNavLink>
      ))}
    </Wrapper>
  );
}

export default DesktopNav;
