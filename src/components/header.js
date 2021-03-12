import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";

const CustomNav = styled(Navbar)`
  box-shadow: -2px 8px 8px -4px #999;
  padding: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  font-weight: normal;
  font-family: "Racing Sans One";
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.45rem;
  text-decoration: none;
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 7px red, 0 0 1px red;

  :hover {
    text-decoration: underline;
  }

  &.current-page {
    text-decoration: underline;
  }
`;

const TitleLink = styled(Link)`
  color: white;
  text-shadow: 5px 4px 4px grey;
  color: white;
  text-decoration: none;
`;

export default function Header() {
  return (
    <CustomNav sticky="top" bg="light" expand="lg">
      <TitleLink to="/">
        <h2>McCarron Auto</h2>
      </TitleLink>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ color: "yellow" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" activeClassName="current-page">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="current-page">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="current-page">
            Contact
          </NavLink>
          <NavLink to="/tutorials" activeClassName="current-page">
            Tutorials
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </CustomNav>
  );
}
