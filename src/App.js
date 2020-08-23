import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Layout from "components/Layout";
import Canvas from "components/Canvas";
import ThemeContext, { themes } from "contexts/ThemeContext";

const Container = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 50px 10px;
    position: relative;
  }

  font-weight: ${(props) => (props.theme.type === "light" ? 400 : 300)};
`;

function App() {
  const myTheme =
    localStorage.getItem("theme") && localStorage.getItem("theme") === "light"
      ? themes.light
      : themes.dark;
  const [theme, setTheme] = useState(myTheme);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Canvas theme={theme} />
        <Container theme={theme}>
          <Layout />
        </Container>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
