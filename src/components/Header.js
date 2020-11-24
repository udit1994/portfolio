import React from "react";
import styled from "styled-components";

import Hamburger from "components/styled/Hamburger";
import Navigation from "components/Navigation";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  font-size: 0.6rem;
  height: 5rem;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

function Header(props) {
  const { handleClick, showMenu } = props;

  return (
    <>
      <Wrapper>
        <div>
          <p title="name">{`< Udit Kaushik />`}</p>
          <p title="role">{`< Frontend Developer />`}</p>
        </div>
        <div onClick={handleClick}>
          <div style={{ cursor: "pointer", padding: "1rem" }}>
            <Hamburger transition={showMenu} />
          </div>
        </div>
      </Wrapper>
      <Navigation showMenu={showMenu} handleClick={handleClick} />
    </>
  );
}

export default Header;
