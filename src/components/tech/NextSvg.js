import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/nextjs.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function NextSvg() {
  return <Icon />;
}

export default NextSvg;
