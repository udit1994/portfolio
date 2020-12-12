import React from "react";
import styled from "styled-components";

import MenuIcon from "components/styled/MenuIcon";
import Navigation from "components/Navigation";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  height: 4rem;
  justify-content: space-between;
  margin: 0 2rem;
`;

function Header(props) {
  const { handleClick, showMenu } = props;

  return (
    <>
      <Wrapper>
        <section>
          <h5 title="name">{`< Udit Kaushik />`}</h5>
          <h5 title="role">{`< Frontend Developer />`}</h5>
        </section>
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
