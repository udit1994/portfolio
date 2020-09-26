import React, { lazy, Suspense } from "react";
import styled from "styled-components";

const Babel = lazy(() => import("components/tech/BabelSvg"));
const Bootstrap = lazy(() => import("components/tech/BootstrapSvg"));
const Css = lazy(() => import("components/tech/CssSvg"));
const Es6 = lazy(() => import("components/tech/Es6Svg"));
const Eslint6 = lazy(() => import("components/tech/EslintSvg"));
const Express = lazy(() => import("components/tech/ExpressSvg"));
const Git = lazy(() => import("components/tech/GitSvg"));
const Graphql = lazy(() => import("components/tech/GraphqlSvg"));
const Heroku = lazy(() => import("components/tech/HerokuSvg"));
const Html = lazy(() => import("components/tech/HtmlSvg"));
const Javascript = lazy(() => import("components/tech/JavascriptSvg"));
const Jss = lazy(() => import("components/tech/JssSvg"));
const Mongo = lazy(() => import("components/tech/MongoSvg"));
const Next = lazy(() => import("components/tech/NextSvg"));
const Node = lazy(() => import("components/tech/NodeSvg"));
const Postgress = lazy(() => import("components/tech/PostgressSvg"));
const ReactJs = lazy(() => import("components/tech/ReactSvg"));
const Redux = lazy(() => import("components/tech/ReduxSvg"));
const Socket = lazy(() => import("components/tech/SocketSvg"));
const Vscode = lazy(() => import("components/tech/VscodeSvg"));
const Webpack = lazy(() => import("components/tech/WebpackSvg"));

const Wrapper = styled.section`
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column-end: 11;
  grid-column-start: 3;
  grid-row-end: 10;
  grid-row-start: 4;
  justify-content: space-evenly;
  justify-items: center;

  @media only screen and (max-width: 1023px) {
    height: 75%;
    width: 100%;
  }
`;

function Skill() {
  return (
    <Wrapper>
      <Suspense>
        <Babel />
        <Bootstrap />
        <Css />
        <Es6 />
        <Eslint6 />
        <Express />
        <Git />
        <Graphql />
        <Heroku />
        <Html />
        <Javascript />
        <Jss />
        <Mongo />
        <Next />
        <Node />
        <Postgress />
        <ReactJs />
        <Redux />
        <Socket />
        <Vscode />
        <Webpack />
      </Suspense>
    </Wrapper>
  );
}

export default Skill;
