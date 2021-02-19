import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background: rgba(8, 121, 201, 0.96);
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 12;
`;

const Header = ({ children }) => {
  return (
    <>
      <StyledHeader>{children}</StyledHeader>
    </>
  );
};

export default Header;
