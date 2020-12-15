import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <Container
      className="bg-secondary"
      fluid
      as="main"
      style={{ minHeight: "85vh" }}
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <Col md="10" xs="12">
          <Card
            className="bg-dark text-white"
            style={{ boxShadow: "0 0 5px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <Card.Body className="text-center">
              <Card.Title>Welcome</Card.Title>
              <Card.Text>
                Ici tu tu trouveras pleins d'articles sur différents jeux vidéo,
                tu pourras voir leur description, leur note mais également sur
                quel plateforme ils ont été tester
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
