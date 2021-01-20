import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Mohamed Sobh",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "about", path: "/about" },
        { title: "projects", path: "/projects" },
        { title: "contact", path: "/contact" }
      ],
      home: {
        title: "Be relentless",
        subtitle: "Projects that make a difference",
        text: "Checkout my projects"
      },
      about: {
        title: "About me"
      },
      projects: {
        title: "Projects"
      },
      contact: {
        title: "Contact me"
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Mohamed Sobh</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact me
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}
