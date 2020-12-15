import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" as="header">
        <Navbar.Brand href="/">GAMELAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
