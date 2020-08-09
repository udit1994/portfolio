import React, { useState } from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import ThemeContext, { themes } from "contexts/ThemeContext";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100%;
  height: 100vh;
  justify-content: center;
  min-width: 1261px;
  width: 100%;
  width: 100vw;
`;

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Container theme={theme}>
        <Layout />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
