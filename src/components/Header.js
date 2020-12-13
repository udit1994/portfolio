import React from "react";
import styled from "styled-components";

import MenuIcon from "components/styled/MenuIcon";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  height: 4rem;
  justify-content: space-between;
  margin: 0 2rem;
  z-index: 2;
`;

function Header(props) {
  const { setDisplayMenu, showMenu } = props;

  return (
    <>
      <Wrapper>
        <section>
          <h5 title="name">{`< Udit Kaushik />`}</h5>
          <h5 title="role">{`< Frontend Developer />`}</h5>
        </section>
        <div onClick={setDisplayMenu}>
          <div style={{ cursor: "pointer", padding: "1rem" }}>
            <MenuIcon transition={showMenu} />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Header;
