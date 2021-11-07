import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";
import logo from "../../images/croissant-logo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          {" "}
          <img src={logo} alt="logo" />{" "}
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
