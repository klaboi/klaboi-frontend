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
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../Assets/logo1.svg";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo to="/">Klaboi</NavLogo> */}
          <NavLogo to="/"><img style={{width:"150px"}} src={Logo}/></NavLogo>
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
    </>
  );
};

export default Navbar;
