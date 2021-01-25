import React from "react";
import Hero from "../components/Hero";
import Zoom from "react-reveal/Zoom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <Zoom>
      <Container fluid>
        <Row>
          <Col xs={11}>
            <Hero
              title={props.title}
              subTitle={props.subTitle}
              text={props.text}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Link
              to="/projects"
              className="btn btn-primary"
              style={{ color: "black" }}
            >
              Check out
            </Link>
          </Col>
        </Row>
      </Container>
    </Zoom>
  );
}

export default HomePage;
