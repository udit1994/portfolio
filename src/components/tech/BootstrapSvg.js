import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/bootstrap.svg";

const Icon = styled(Svg)`
  height: 50px;
  margin: 0 30px;
  width: 50px;
`;
function BabelSvg() {
  return <Icon />;
}

export default BabelSvg;
