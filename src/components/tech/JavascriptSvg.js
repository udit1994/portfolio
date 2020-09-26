import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/javascript.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function JavascriptSvg() {
  return <Icon />;
}

export default JavascriptSvg;
