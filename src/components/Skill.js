import React, { Suspense } from "react";
import styled from "styled-components";

import { ReactComponent as Babel } from "assets/tech/babel.inline.svg";
import { ReactComponent as Bootstrap } from "assets/tech/bootstrap.inline.svg";
import { ReactComponent as CSS3 } from "assets/tech/css3.inline.svg";
import { ReactComponent as ES6 } from "assets/tech/es6.inline.svg";
import { ReactComponent as Eslint } from "assets/tech/eslint.inline.svg";
import { ReactComponent as Express } from "assets/tech/express.inline.svg";
import { ReactComponent as Git } from "assets/tech/git.inline.svg";
import { ReactComponent as GraphQL } from "assets/tech/graphql.inline.svg";
import { ReactComponent as Heroku } from "assets/tech/heroku.inline.svg";
import { ReactComponent as HTML5 } from "assets/tech/html5.inline.svg";
import { ReactComponent as JavaScript } from "assets/tech/javascript.inline.svg";
import { ReactComponent as JSS } from "assets/tech/jss.inline.svg";
import { ReactComponent as MongoDB } from "assets/tech/mongodb.inline.svg";
import { ReactComponent as NextJS } from "assets/tech/nextjs.inline.svg";
import { ReactComponent as NodeJS } from "assets/tech/nodejs.inline.svg";
import { ReactComponent as PostgreSQL } from "assets/tech/postgresql.inline.svg";
import { ReactComponent as ReactJS } from "assets/tech/react.inline.svg";
import { ReactComponent as Redux } from "assets/tech/redux.inline.svg";
import { ReactComponent as SocketIO } from "assets/tech/socket.io.inline.svg";
import { ReactComponent as VSCode } from "assets/tech/vscode.inline.svg";
import { ReactComponent as Webpack } from "assets/tech/webpack.inline.svg";

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

const style = {
  height: 50,
  margin: 30,
  objectFit: "contain",
  width: 50,
};

const backgroundStyle = {
  ...style,
  backgroundColor: "#fffffe",
  borderRadius: 20,
  padding: 2,
};

function Skill() {
  return (
    <Wrapper>
      <Suspense fallback={<div />}>
        <Babel style={style} title="babel" />
        <Bootstrap style={style} />
        <CSS3 style={style} />
        <ES6 style={style} />
        <Eslint style={style} />
        <Express style={backgroundStyle} />
        <Git style={backgroundStyle} />
        <GraphQL style={style} />
        <Heroku style={backgroundStyle} />
        <HTML5 style={style} />
        <JavaScript style={style} />
        <JSS style={style} />
        <MongoDB style={backgroundStyle} />
        <NextJS style={backgroundStyle} />
        <NodeJS style={backgroundStyle} />
        <PostgreSQL style={style} />
        <ReactJS style={style} />
        <Redux style={style} />
        <SocketIO style={style} />
        <VSCode style={style} />
        <Webpack style={style} />
      </Suspense>
    </Wrapper>
  );
}

export default Skill;
