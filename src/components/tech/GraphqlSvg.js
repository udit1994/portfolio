import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/graphql.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function GraphqlSvg() {
  return <Icon />;
}

export default GraphqlSvg;
