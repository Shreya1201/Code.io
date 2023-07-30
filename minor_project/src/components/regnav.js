import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Footer from "./Footer";

export default function Regnav() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        className="head"
      >
        <Container className="headnav">
          <Link className="brand" to="/">
            <img alt="logo" src={require("../images/logo.png")} />
            <span>CoDe.io</span>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
