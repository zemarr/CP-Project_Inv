import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button, Container, NavLogo } from "../../GlobalStyles";

import CloseMenuIcon from "../../img/menuCloseIconWhite.svg";
import MenuIcon from "../../img/menuIconWhite.svg";
import { StyledHeader } from "./Header";

// import { IconContext } from "react-icons/lib"; // Basically took advantage of the IconContext by subscribing to the Provider
// import { HeaderObjOne } from "../../Pages/LandingPage/Data";

// font-family: 'PT Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #fff;
`;

export const MobileIcon = styled.div`
  display: none;
  height: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transfrom: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 85%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    justify-content: space-evenly;
    top: 80px;
    overflow: hidden;
    left: ${({ click }) =>
      click
        ? 0
        : "-100%"}; //we destructured an aobject to use click to take the value of click state we created in the main component. click will toggle the left position of itself between 0 and 100% when click is true or false.
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ lightBg }) => (lightBg ? "#fff" : "rgb(18,126,203)")};
  }
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease;
  padding: 0 1rem;

  /* &:hover {
    border-bottom: 2px solid #fff;
    transition: all 0.5s ease;
  } */

  @media screen and (max-width: 768px) {
    height: 60px;
    width: auto;
    border: none;

    &:hover {
      border: none;
      align-items: center;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    transition: all 0.3s ease;

    /* &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    } */
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 6px 12px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Navbar = ({ lightBg }) => {
  const [click, setClick] = useState(false); // create state for clicks on the navbar (initial value = false)
  const [button, setButton] = useState(true); // create state for buttons on the navbar (initial value = true) including the hamburger and styling

  const handleClick = () => setClick(!click); // method for toggling the click state and returning a value;

  const showButton = () => {
    // method to check if the hamburger would show or not,
    if (window.innerWidth <= 768) {
      // if the width of the device on page load is less than or equal to 768px, then button should be false, else it should be true
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // It's brilliant. The way he controlled this situation. He refused that it should have one and an opposite result for a true or false statement. Instead he decided to switch the board and call the shots.
  // First he sets the button to show by default
  // Then he uses a method to say if the screen width is less than/equal to 768, the button wouldn't show. > At first I was like, this dude must be cray cray but listen to this...
  // He has two props in his component that possess different data and he wishes to show one or both of them.
  // So, he uses the tenary operator to toggle between true and false. When it is false it shows the button with only one of its style props, and when button is true, it shows the component with both style props.

  useEffect(() => {
    // useEffect hook to run on mount of this component
    showButton(); // The showButton method is fired and tracked by the state
  }, []);

  window.addEventListener("resize", showButton); // add an event listener to listen for window resize, any time the resize action is carried the showButton function will run.

  return (
    <>
      <StyledHeader>
        {/* <IconContext.Provider
          value={{ color: lightTextDesc ? "#1c2237" : "#fff" }}
        > */}
        <Container>
          <StyledNav>
            <NavLogo to="/">CPInvest</NavLogo>
            <NavMenu onClick={handleClick} click={click} lightBg={lightBg}>
              {" "}
              {/* Here we introduced a "click" method to pass the click state as props. This way the component's styling can have access to the value of click state. */}{" "}
              {/* Here we introduced a "click" method to pass the click state as props. This way the component's styling can have access to the value of click state. */}
              <NavItemWrapper>
                <NavItem>
                  <NavLinks to="/about">About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/know-CP">Who's CP?</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/faqs">FAQs</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/learn">Learn</NavLinks>
                </NavItem>
              </NavItemWrapper>
              <NavButtonWrapper>
                {button ? (
                  <>
                    <NavButtonLink to="/sign-in">
                      <Button>Sign in</Button>
                    </NavButtonLink>
                    <NavButtonLink to="/sign-up">
                      <Button primary>Sign up for free</Button>
                    </NavButtonLink>
                  </>
                ) : (
                  <>
                    <NavButtonLink to="/sign-in">
                      <Button>Sign in</Button>
                    </NavButtonLink>
                    <NavButtonLink to="/sign-up">
                      <Button primary fontBig>
                        Sign up for free
                      </Button>
                    </NavButtonLink>
                  </>
                )}
              </NavButtonWrapper>
            </NavMenu>

            <MobileIcon onClick={handleClick}>
              {" "}
              {/* Use the handleClick method to toggle between the hamburger & close icons */}
              {click ? (
                <img src={CloseMenuIcon} alt=""
                width="20px" />
              ) : (
                <img src={MenuIcon} alt=""
                width="23px" />
              )}
            </MobileIcon>
          </StyledNav>
        </Container>
        {/* </IconContext.Provider> */}
      </StyledHeader>
    </>
  );
};

export default Navbar;
