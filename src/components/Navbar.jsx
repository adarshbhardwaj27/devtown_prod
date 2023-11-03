import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  height: 3rem;
  font-size: larger;
  color: white;
  background-color: #90c5a9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <h1>My Products List</h1>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
