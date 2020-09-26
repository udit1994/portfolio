import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "assets/tech/socket.svg";
import { backgroundStyle } from "components/tech/styles";

const Icon = styled(Svg)`
  ${backgroundStyle}
`;

function SocketSvg() {
  return <Icon />;
}

export default SocketSvg;
