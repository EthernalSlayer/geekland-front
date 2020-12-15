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
    <Container fluid as="main">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1>Articles</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((article, index) => (
          <Col key={index} md="4" xs="12">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  article.image
                    ? `http://localhost:4000/${article.image}`
                    : placeholder
                }
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {article.plateforme}{" "}
                  <small className="text-muted">{`${article.rate}/20`}</small>
                </Card.Subtitle>
                <Card.Text>{article.description}</Card.Text>
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
