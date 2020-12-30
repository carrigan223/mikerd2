import React from "react";
import styled from "@emotion/styled";
import { Navbar, Nav } from "react-bootstrap";

const CustomNav = styled(Navbar)`
  box-shadow: 0 8px 6px -6px #999;
`;

export default function Header() {
  return (
    <CustomNav sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <h4>McCarron Auto</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </CustomNav>
  );
}
