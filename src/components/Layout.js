import React, { Fragment, Suspense } from "react";
import Media from "react-media";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import About from "components/About";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Social from "components/Social";

const Project = React.lazy(() => import("components/Project"));
const Skill = React.lazy(() => import("components/Skill"));

const Frame = styled.div`
  border-color: white;
  border-style: solid;
  border-width: 1px;
  height: calc(100% - 80px);
  left: 85px;
  opacity: 0.3;
  position: absolute;
  top: 40px;
  width: calc(100% - 170px);

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Layout = () => {
  const { hash } = useLocation();

  return (
    <Media
      queries={{
        small: "(max-width: 1023px)",
      }}
    >
      {(match) => {
        const Component = match.small ? MobileWrapper : Fragment;

        return (
          <>
            <Header mediaQuery={match} />
            <Frame />
            <Social hashRoute={hash} />
            <Navbar mediaQuery={match} hashRoute={hash} />
            <Component>
              {hash === "" && <About mediaQuery={match} />}
              <Suspense fallback={<div />}>
                {hash === "#projects" && <Project />}
                {hash === "#skills" && <Skill />}
              </Suspense>
            </Component>
          </>
        );
      }}
    </Media>
  );
};

export default Layout;
