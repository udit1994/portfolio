import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/webpack.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function WebpackSvg() {
  return <Icon />;
}

export default WebpackSvg;
