import React, { Component } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

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
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col>
            <Card className="contact-card " style={{ width: "45rem" }}>
              <Card.Body>
                <Card.Title>
                  <Hero title={this.props.title} />
                </Card.Title>
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
                      variant="primary"
                      type="submit"
                      disabled={this.state.disabled}
                    >
                      Send
                    </Button>
                    {this.state.emailSent === true && (
                      <p className="d-inline success-msg">Email sent</p>
                    )}
                    {this.state.emailSent === false && (
                      <p className="d-inline err-msg">Email hasn't been sent</p>
                    )}
                  </Form>
                </Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
