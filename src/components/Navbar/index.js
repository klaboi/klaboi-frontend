import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksLogged,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../Assets/logo.svg";

const Navbar = ({ toggle }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const Logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
  };

  return (
    <>
      {" "}
      {!isAuthenticated ? (
        <Nav>
          <NavbarContainer>
            {/* <NavLogo to="/"><img src={Logo}/></NavLogo> */}
            <NavLogo to="/">Klaboi</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"> About </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="students"> Students </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="professors"> Professors </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"> Contact Us </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/Login"> Sign in </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      ) : (
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Klaboi</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksLogged to="/Projects/All"> Projects </NavLinksLogged>
              </NavItem>
              <NavItem>
                <NavLinksLogged to="/MyApplications">
                  {" "}
                  Applications{" "}
                </NavLinksLogged>
              </NavItem>
              <NavItem>
                <NavLinksLogged to="/Profile"> Profile </NavLinksLogged>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/" onClick={() => Logout()}>
                {" "}
                Sign out{" "}
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
