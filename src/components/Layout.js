import React, { useContext } from "react";
import styled from "styled-components";

import Header from "components/Header";
import Social from "components/Social";
import ThemeContext from "context/ThemeContext";

const Border = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  border-color: ${(props) => props.theme.color};
  border-width: 1px;
  border-style: solid;
  height: 90%;
  width: 90%;
  opacity: 0.3;
`;

const Layout = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Border theme={theme} />
      <Header />
      <Social />
    </>
  );
};

export default Layout;
