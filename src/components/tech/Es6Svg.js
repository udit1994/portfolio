import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/es6.svg";

const Icon = styled(Svg)`
  height: 50px;
  margin: 0 30px;
  width: 50px;
`;
function Es6Svg() {
  return <Icon />;
}

export default Es6Svg;
