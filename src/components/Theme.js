import React, { useContext } from "react";
import styled from "styled-components";

import { ReactComponent as Button } from "assets/theme.svg";
import ThemeContext, { themes } from "contexts/ThemeContext";

const Wrapper = styled.div`
  bottom: 10px;
  cursor: pointer;
  height: 35px;
  opacity: 0.5;
  position: fixed;
  right: 10px;
  width: 35px;
  z-index: 10;
  transform: ${(props) =>
    props.light === true ? "scale(-1, 1)" : "scale(1,1)"};

  &:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const light = theme.type === "light";

  const handleClick = () => {
    if (light) {
      setTheme(themes.dark);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(themes.light);
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Wrapper onClick={handleClick} light={light}>
      <Button />
    </Wrapper>
  );
}

export default Theme;
