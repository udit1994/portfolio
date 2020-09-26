import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/babel.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function BabelSvg() {
  return <Icon />;
}

export default BabelSvg;
