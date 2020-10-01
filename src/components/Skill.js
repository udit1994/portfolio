import React from "react";
import styled from "styled-components";

import Babel from "components/tech/BabelSvg";
import Bootstrap from "components/tech/BootstrapSvg";
import Css from "components/tech/CssSvg";
import Es6 from "components/tech/Es6Svg";
import Eslint6 from "components/tech/EslintSvg";
import Express from "components/tech/ExpressSvg";
import Git from "components/tech/GitSvg";
import Graphql from "components/tech/GraphqlSvg";
import Heroku from "components/tech/HerokuSvg";
import Html from "components/tech/HtmlSvg";
import Javascript from "components/tech/JavascriptSvg";
import Jss from "components/tech/JssSvg";
import Mongo from "components/tech/MongoSvg";
import Next from "components/tech/NextSvg";
import Node from "components/tech/NodeSvg";
import Postgress from "components/tech/PostgressSvg";
import ReactJs from "components/tech/ReactSvg";
import Redux from "components/tech/ReduxSvg";
import Socket from "components/tech/SocketSvg";
import Vscode from "components/tech/VscodeSvg";
import Webpack from "components/tech/WebpackSvg";

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
    </Wrapper>
  );
}

export default Skill;
