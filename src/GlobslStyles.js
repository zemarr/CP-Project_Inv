import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FaMagento } from "react-icons/fa";
import GeorgiaBold from "./font/georgiabold.ttf";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Georgia';
  src: url(${GeorgiaBold}) format('truetype');
  font-style: bold;
  font-display: auto;
}

* {
  text-rendering: optimizeSpeed;
}

h1 {
  font-family: 'Georgia';
  text-rendering: optimizeSpeed;
}

a {
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeSpeed;
}

p {
  font-family: 'PT Sans', sans-serif;
  text-rendering: optimizeSpeed;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1235px) {
    padding: 0 1.0875rem;
  }
  @media screen and (min-width: 470px) and (max-width: 768px) {
    /* max-width: 480px; */
  }
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#fff" : "transparent")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 64px" : "8px 17px")};
  padding: ${({ noPad }) => (noPad ? "0" : "")};
  margin-right: ${({ spaceMargin }) => (spaceMargin ? "17px" : "")};
  color: ${({ primary }) => (primary ? "#2784c6" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "14px")};
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: ${({ noOutline }) => (noOutline ? "none" : "none !important")};
    border: ${({ noOutline }) => (noOutline ? "none !important" : "")};
  }

  /* &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  } */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSection = styled("section")`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "rgb(8, 121, 201, 0.96)")};
  padding-top: ${({ mediumPaddingTop }) =>
    mediumPaddingTop ? "100px" : "35px"};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? "100px" : "50px")};
  color: ${({ lightBg }) => (lightBg ? "rgba(8, 121, 201, 0.96)" : "#fff")};
`;

export default GlobalStyle;
