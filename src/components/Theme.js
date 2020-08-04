import React, { useContext } from "react";
import styled from "styled-components";

import { ReactComponent as Light } from "assets/light.svg";
import { ReactComponent as Dark } from "assets/dark.svg";

import ThemeContext, { themes } from "context/ThemeContext";

const Wrapper = styled.div`
  position: fixed;
  top: 95%;
  left: 97.5%;
  mouse: cursor;
`;

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const light = theme.type === "light";

  const handleClick = () => {
    if (light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <Wrapper onClick={handleClick}>{light ? <Dark /> : <Light />}</Wrapper>
  );
}

export default Theme;
