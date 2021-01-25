import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import logo from "./assets/images/logo.png";
import Switch from "react-bootstrap/esm/Switch";

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
        title: "Be Persistent",
        subTitle: "Projects that make difference.",
        text: "Want to see my work ?!! "
      },
      about: {
        title: "About me"
      },
      projects: {
        title: "Projects"
      },
      contact: {
        title: "Let's talk"
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom"
            bg="dark"
            variant="dark"
            expand="lg"
          >
            <Navbar.Brand>
              <img
                alt="logo"
                src={logo}
                width="250"
                height="55"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" variant="" defaultActiveKey="/home">
                <Link className="nav-link" to="/" style={{ color: "#ff7552" }}>
                  Home
                </Link>
                <Link
                  className="nav-link"
                  eventKey="link-1"
                  to="/about"
                  style={{ color: "#ff7552" }}
                >
                  About
                </Link>
                <Link
                  className="nav-link"
                  eventKey="link-2"
                  to="/projects"
                  style={{ color: "#ff7552" }}
                >
                  Projects
                </Link>
                <Link
                  className="nav-link"
                  eventKey="link-3"
                  to="/contact"
                  style={{ color: "#ff7552" }}
                >
                  Contact me
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              path="/projects"
              exact
              render={() => <ProjectsPage title={this.state.projects.title} />}
            />
            <Route
              path="/contact"
              exact
              render={() => <ContactPage title={this.state.contact.title} />}
            />
          </Switch>

          <Footer />
        </Container>
      </Router>
    );
  }
}
