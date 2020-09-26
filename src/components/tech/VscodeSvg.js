import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/vscode.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function VscodeSvg() {
  return <Icon />;
}

export default VscodeSvg;
