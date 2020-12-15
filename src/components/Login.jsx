import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Login(props) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      pseudo: pseudo,
      password: password,
    };
    axios
      .post("http://localhost:4000/user/login", data)
      .then((response) => response.data)
      .then((data) => {
        props.setAdmin(data.admin);
        let token = data.access_token;
        localStorage.setItem("access_token", token);
      })
      .catch((err) => console.log(err));
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
          <h1 style={{ margin: "10px" }}>Login</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Form style={{ margin: "20px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-light">Pseudo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer votre pseudo"
              value={pseudo}
              onChange={pseudoChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={passwordChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Se connecter
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
