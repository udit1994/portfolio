import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/css3.svg";

const Icon = styled(Svg)`
  height: 50px;
  margin: 0 30px;
  width: 50px;
`;
function CssSvg() {
  return <Icon />;
}

export default CssSvg;
