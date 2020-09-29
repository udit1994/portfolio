import React, { lazy, Suspense } from "react";
import routes from "content/routes";

const Home = ({ hashRoute, isSmallDevice }) => {
  const Component = lazy(() =>
    isSmallDevice
      ? import("components/MobileNav")
      : import("components/DesktopNav")
  );

  return (
    <Suspense fallback={<div />}>
      <Component routes={routes} hashRoute={hashRoute} />
    </Suspense>
  );
};

export default Home;
