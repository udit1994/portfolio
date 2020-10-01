import React, { Fragment, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import About from "components/About";
import Header from "components/Header";
import Navbar from "components/Navbar";

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
`;

const MobileWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Layout = () => {
  const { hash } = useLocation();

  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 1023);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 1023);
    }

    window.addEventListener("resize", handleResize);
  });

  const [Component, Social] = isSmallDevice
    ? [MobileWrapper, null]
    : [Fragment, React.lazy(() => import("components/Social"))];

  return (
    <>
      <Header isSmallDevice={isSmallDevice} />
      <Suspense fallback={<div />}>{Social ? <Social /> : null}</Suspense>
      {isSmallDevice ? null : <Frame />}
      <Navbar isSmallDevice={isSmallDevice} hashRoute={hash} />
      <Component>
        {hash === "" && <About isSmallDevice={isSmallDevice} />}
        <Suspense fallback={<div />}>
          {hash === "#projects" && <Project />}
          {hash === "#skills" && <Skill />}
        </Suspense>
      </Component>
    </>
  );
};

export default Layout;
