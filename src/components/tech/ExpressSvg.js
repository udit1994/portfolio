import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/express.svg";

const Icon = styled(Svg)`
  background-color: #fffffa;
  height: 50px;
  margin: 0 30px;
  width: 50px;
  border-radius: 20px;
  padding: 2px;
`;

function ExpressSvg() {
  return <Icon />;
}

export default ExpressSvg;
