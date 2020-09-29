import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Layout from "components/Layout";
import Canvas from "components/Canvas";

const Container = styled.div`
  display: grid;
  color: white;
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

  font-weight: 300;
`;

function App() {
  return (
    <BrowserRouter>
      <Canvas />
      <Container>
        <Layout />
      </Container>
    </BrowserRouter>
  );
}

export default App;
