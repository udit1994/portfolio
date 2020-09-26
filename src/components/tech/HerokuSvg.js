import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/heroku.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function HerokuSvg() {
  return <Icon />;
}

export default HerokuSvg;
