import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/jss.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function JssSvg() {
  return <Icon />;
}

export default JssSvg;
