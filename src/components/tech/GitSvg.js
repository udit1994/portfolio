import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/git.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;
function GitSvg() {
  return <Icon />;
}

export default GitSvg;
