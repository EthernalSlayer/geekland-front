import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Backoffice() {
  const newData = {
    title: "",
    description: "",
    plateforme: "",
    rate: "",
    good_point: "",
    bad_point: "",
    date: "",
    image: "",
  };
  const [newArticle, setNewArticle] = useState(newData);
  const [newImage, setNewImage] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const imageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const imageSubmit = (e) => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append("upload", newImage);
    axios({
      method: "post",
      url: "http://localhost:4000/upload",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const idChange = (e) => {
    setDeleteId(e.target.value);
  };

  const deleteSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "delete",
      url: `http://localhost:4000/admin/${deleteId}`,
      headers: { Authorization: localStorage.getItem("access_token") },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const newArticleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.id]: e.target.value });
  };

  const newArticleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:4000/admin",
      data: newArticle,
      headers: { Authorization: localStorage.getItem("access_token") },
    })
      .then((response) => response.data)
      .then((data) => console.log(data))
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
          <h1>Back Office</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" xs="12" className="text-light">
          <h4>Importer une image</h4>
          <Form>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="upload image"
                onChange={imageChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={imageSubmit}>
              Envoyer
            </Button>
          </Form>
          <h4>Supprimer un article</h4>
          <Form>
            <Form.Group>
              <Form.Label>ID</Form.Label>
              <Form.Control
                id="id"
                type="text"
                placeholder="id"
                value={deleteId}
                onChange={idChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={deleteSubmit}>
              Envoyer
            </Button>
          </Form>
        </Col>
        <Col md="4" xs="12" className="text-light">
          <h4>Créer un article</h4>
          <Form>
            <Form.Group>
              <Form.Label>Titre</Form.Label>
              <Form.Control
                id="title"
                type="text"
                placeholder="titre"
                value={newArticle.title}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="description"
                as="textarea"
                rows={3}
                value={newArticle.description}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plateforme</Form.Label>
              <Form.Control
                id="plateforme"
                type="text"
                placeholder="plateforme"
                value={newArticle.plateforme}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control
                id="rate"
                type="text"
                placeholder="note"
                value={newArticle.rate}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Les plus</Form.Label>
              <Form.Control
                id="good_point"
                type="text"
                value={newArticle.good_point}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Les moins</Form.Label>
              <Form.Control
                id="bad_point"
                type="text"
                value={newArticle.bad_point}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                id="date"
                type="date"
                value={newArticle.date}
                onChange={newArticleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                id="image"
                type="text"
                placeholder="nom de l'image avec son extension"
                value={newArticle.image}
                onChange={newArticleChange}
              />
              <Form.Text className="text-muted">
                Si tu as déjà importer une image rentre son nom
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={newArticleSubmit}>
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Backoffice;
