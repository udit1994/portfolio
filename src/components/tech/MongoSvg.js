import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/mongodb.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function MongoSvg() {
  return <Icon />;
}

export default MongoSvg;
