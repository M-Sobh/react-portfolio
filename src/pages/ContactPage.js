import React, { Component } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Flip from "react-reveal/Flip";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      disabled: true
    });
    axios
      .post("http://localhost:3030/api/email", this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <Flip left>
        <Container fluid={true}>
          <Row className="justify-content-center">
            <Col>
              <Card
                className="contact-card "
                style={{ width: "45rem", backgroundColor: "#FF9C70" }}
              >
                <Card.Body>
                  <Card.Title>
                    <Hero title={this.props.title} />
                  </Card.Title>
                  <hr />
                  <Content>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control
                          id="full-name"
                          name="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                          id="email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label htmlFor="message">Your message</Form.Label>
                        <Form.Control
                          id="message"
                          name="message"
                          as="textarea"
                          rows="3"
                          value={this.state.message}
                          onChange={this.handleChange}
                        />
                      </Form.Group>

                      <Button
                        className="d-inline-block"
                        variant="dark"
                        type="submit"
                        disabled={this.state.disabled}
                      >
                        Send
                      </Button>
                      {this.state.emailSent === true && (
                        <p className="d-inline success-msg">Email sent</p>
                      )}
                      {this.state.emailSent === false && (
                        <p className="d-inline err-msg">
                          Email hasn't been sent
                        </p>
                      )}
                    </Form>
                    <hr />
                    <div>
                      <h2>Or, simply reach me directly!</h2>
                      <h4>E-mail : eng.m_sobhe@yahoo.com</h4>
                      <h4> Mob. : (+44) 07862 698820</h4>
                    </div>
                  </Content>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Flip>
    );
  }
}
