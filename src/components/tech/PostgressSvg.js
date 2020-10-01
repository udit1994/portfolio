import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/postgresql.svg";
import { style } from "components/tech/styles";

const Icon = styled(Svg)`
  ${style}
`;

function PostgressSvg() {
  return <Icon />;
}

export default PostgressSvg;