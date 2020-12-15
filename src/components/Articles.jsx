import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Card } from "react-bootstrap";
import placeholder from "../assets/placeholder.png";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/articles")
      .then((response) => response.data)
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="bg-secondary" fluid as="main">
      <Row className="justify-content-center">
        <Col className="text-center text-light">
          <h1 style={{ margin: "10px", textShadow: "1px 1px 2px black" }}>
            Articles
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((article, index) => (
          <Col key={index} md="3" xs="12">
            <Card
              className="bg-dark"
              style={{
                margin: "20px 0 20px 0",
                boxShadow: "0 0 5px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Card.Img
                variant="top"
                src={
                  article.image
                    ? `http://localhost:4000/${article.image}`
                    : placeholder
                }
                style={{ height: "400px" }}
              />
              <Card.Body>
                <Card.Title className="text-light">{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {article.plateforme}{" "}
                  <small className="text-muted">{`${article.rate}/20`}</small>
                </Card.Subtitle>
                <Card.Text className="text-light">
                  {article.description}
                </Card.Text>
                <Card.Text className="text-success">
                  {article.good_point}
                </Card.Text>
                <Card.Text className="text-danger">
                  {article.bad_point}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{`Last updated ${
                  article.date.split("T")[0]
                }`}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Articles;
