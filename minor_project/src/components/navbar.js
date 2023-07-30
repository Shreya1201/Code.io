import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbr() {
  return (
    <div>
      <Navbar
        className="head"
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
      >
        <Container className="headnav">
          <Link className="brand" to="/">
            <img alt="logo" src={require("../images/logo.png")} />
            <span>CoDe.io</span>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="box1">
              <Link className="btn3" to="./Login">
                LOGIN
              </Link>
              <Link className="btn3" to="/Register">
                REGISTER
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
