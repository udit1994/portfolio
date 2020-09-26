import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/nodejs.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function NodeSvg() {
  return <Icon />;
}

export default NodeSvg;
