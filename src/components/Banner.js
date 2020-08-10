import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import ThemeContext from "contexts/ThemeContext";
import { ReactComponent as HyperLink } from "assets/link.svg";

const Paragraph = styled.div`
  grid-column-end: ${(props) => props.columnEnd};
  grid-column-start: ${(props) => props.columnStart};
  grid-row-end: ${(props) => props.rowEnd};
  grid-row-start: ${(props) => props.rowStart};
`;

const animateTitle = keyframes`
  0% { 
    opacity: 0;
    transform: translate3d(0, 200%, 0); 
  }
  40%, 60% {
    opacity: 1;
    transform: translate3d(0, 200%, 0); 
  }
  100% { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Title = styled.div`
  animation: ${animateTitle};
  animation-delay: 0.5s;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 10px;
  transform: translate(0, 100%);
  background-image: linear-gradient(90deg, #ffffff, #8b00ff);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const animateDescription = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, 100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Description = styled.div`
  animation: ${animateDescription};
  animation-duration: 0.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translate(0, 100%);

  > ul {
    margin-bottom: 0;
  }
`;

const animateDivider = keyframes`
  from {
    width: 0%
  }
  to {
    width: 100%
  }
`;

const Divider = styled.div`
  animation: ${animateDivider};
  animation-duration: 1s;
  animation-delay: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  border-bottom: 1px solid ${(props) => props.theme.color};
  padding-bottom: 10px;
  width: 0%;
`;

const animateFooter = keyframes`
  from { 
    opacity: 0;
    transform: translate3d(0, -100%, 0); 
  }
  to { 
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`;

const Footer = styled.div`
  animation: ${animateFooter};
  animation-duration: 0.75s;
  animation-delay: 2.25s;
  animation-fill-mode: forwards;
  margin-bottom: 50px;
  opacity: 0;
  padding-top: 10px;
  transform: translate(0, -100%);
}
`;

function Banner({
  content: {
    description: { main, bullets },
    footer,
    grid,
    link,
    title,
  },
}) {
  const { theme } = useContext(ThemeContext);
  const Component = grid ? Paragraph : "div";

  return (
    <Component {...grid}>
      <Title theme={theme}>
        {`${title} `}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <HyperLink />
          </a>
        )}
      </Title>
      <Description>
        <>
          {main}
          {bullets && (
            <ul>
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </>
      </Description>
      <Divider theme={theme} />
      <Footer>{footer}</Footer>
    </Component>
  );
}

export default Banner;
