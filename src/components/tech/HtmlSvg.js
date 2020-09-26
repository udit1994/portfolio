import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/html5.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function HTMLSvg() {
  return <Icon />;
}

export default HTMLSvg;
