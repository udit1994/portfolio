import React from "react";
import styled from "styled-components";

import MenuIcon from "components/styled/MenuIcon";
import Navigation from "components/Navigation";

const Wrapper = styled.header`
  align-items: center;
  box-shadow: 0 1px 4px #ffffff;
  display: flex;
  font-size: 0.7rem;
  height: 4rem;
  justify-content: space-between;
  padding: 0 2rem;
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
            <MenuIcon transition={showMenu} />
          </div>
        </div>
      </Wrapper>
      <Navigation showMenu={showMenu} handleClick={handleClick} />
    </>
  );
}

export default Header;
