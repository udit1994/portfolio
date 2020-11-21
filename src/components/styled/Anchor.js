import styled from "styled-components";

const Anchor = styled.a`
  color: #ffffff;
  position: relative;
  text-decoration: none;

  :hover {
    color: #000000;

    ::after {
      display: block;
    }
  }

  ::after {
    background-color: #000000;
    content: " ";
    display: none;
    height: 0.1rem;
    position: absolute;
    width: 100%;
  }
`;

export default Anchor;
