import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setAdmin(true);
  };

  return (
    <Container
      className="bg-dark"
      fluid
      as="main"
      style={{ minHeight: "85vh" }}
    >
      <Row className="justify-content-center">
        <Col className="text-light text-center">
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-light">Pseudo</Form.Label>
            <Form.Control type="email" placeholder="Enter your pseudo" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
