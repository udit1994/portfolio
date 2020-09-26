import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/react.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function ReactSvg() {
  return <Icon />;
}

export default ReactSvg;
