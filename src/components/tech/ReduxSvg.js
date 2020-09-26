import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/redux.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function ReduxSvg() {
  return <Icon />;
}

export default ReduxSvg;
