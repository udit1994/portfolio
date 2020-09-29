import React, { Fragment, lazy, Suspense } from "react";
import styled from "styled-components";

import { description, goal, title } from "content/home.js";
import Banner from "components/Banner";
const LoadSelfImage = lazy(() => import("components/LoadSelfImage"));

const MobileWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

function About({ isSmallDevice }) {
  const Container = isSmallDevice ? MobileWrapper : Fragment;

  return (
    <Container>
      <Suspense fallback={null}>
        <LoadSelfImage />
      </Suspense>
      <Banner title={title} description={description} goal={goal} />
    </Container>
  );
}

export default About;
