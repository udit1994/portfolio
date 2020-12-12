import styled from "styled-components";

const MenuIcon = styled.div`
  ::before {
    background-color: #9a9a9a;
    bottom: ${(props) => (props.transition ? 1.6 : 0.4)}rem;
    box-shadow: 0 0 0.2rem #9a9a9a;
    content: " ";
    height: 0.1rem;
    left: -0.85rem;
    position: absolute;
    transform: rotate(${(props) => (props.transition ? -45 : 45)}deg);
    width: 1rem;
  }

  background-color: #9a9a9a;
  box-shadow: 0 0 0.2rem #9a9a9a;
  height: 2rem;
  position: relative;
  width: 0.1rem;

  ::after {
    background-color: #9a9a9a;
    bottom: ${(props) => (props.transition ? 1.6 : 0.4)}rem;
    box-shadow: 0 0 0.2rem #9a9a9a;
    content: " ";
    height: 0.1rem;
    position: absolute;
    right: -0.8rem;
    transform: rotate(${(props) => (props.transition ? 45 : -45)}deg);
    width: 1rem;
  }
`;

export default MenuIcon;
