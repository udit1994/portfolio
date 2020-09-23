import React from "react";

import DesktopNav from "components/DesktopNav";
import MobileNav from "components/MobileNav";
import routes from "content/routes";

const Home = ({ hashRoute, mediaQuery }) => {
  return mediaQuery.small ? (
    <MobileNav routes={routes} hashRoute={hashRoute} />
  ) : (
    <DesktopNav routes={routes} hashRoute={hashRoute} />
  );
};

export default Home;
