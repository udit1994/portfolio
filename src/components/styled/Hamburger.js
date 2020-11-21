import styled from "styled-components";

const Hamburger = styled.div`
  ::before {
    background-color: white;
    bottom: ${(props) => (props.transition ? 1.6 : 0.4)}rem;
    box-shadow: 0 0 4px #ffffff;
    content: " ";
    height: 0.1rem;
    left: -0.85rem;
    position: absolute;
    transform: rotate(${(props) => (props.transition ? -45 : 45)}deg);
    width: 1rem;
  }

  background-color: white;
  box-shadow: 0 0 4px #ffffff;
  height: 2rem;
  position: relative;
  width: 0.1rem;

  ::after {
    background-color: white;
    bottom: ${(props) => (props.transition ? 1.6 : 0.4)}rem;
    box-shadow: 0 0 4px #ffffff;
    content: " ";
    height: 0.1rem;
    position: absolute;
    right: -0.8rem;
    transform: rotate(${(props) => (props.transition ? 45 : -45)}deg);
    width: 1rem;
  }
`;

export default Hamburger;
