import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import weatherImg from "../pictures/WeatherImg.png";
import recipeImg from "../pictures/recipeImg.png";
import todoImg from "../pictures/todoImg.png";
import clubImg from "../pictures/clubImg.jpg";
import cafeImg from "../pictures/cafeImg.png";
import agronomImg from "../pictures/agronomImg.png";
import { RiEarthFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <Container>
      <h4 className="mt-5 text-center text-light">Projects</h4>
      <h5 className="mt-3 mb-3 text-center text-light">
        Here you can find some of the projects on which i worked recently
      </h5>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
          <Row className="text-center">
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={todoImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title>Todo</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>
                  <Badge className="mt-2" pill variant="light">
                    Redux
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    React-bootstrap
                  </Badge>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={clubImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title>Club Members</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>
                  <Badge className="mt-2" pill variant="light">
                    Redux
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    Bootstrap
                  </Badge>
                  <Card.Text className="mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={weatherImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="text-light">Weather</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>
                  <Badge className="mt-2" pill variant="light">
                    Redux
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    API
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    Bootstrap
                  </Badge>
                  <Card.Text className="mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={recipeImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="text-light">Recipe</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>
                  <Badge className="mt-2" pill variant="light">
                    Redux
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    API
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    React-bootstrap
                  </Badge>
                  <Card.Text className="mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={cafeImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title>Cafe</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    Redux
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    Bootstrap
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    React-bootstrap
                  </Badge>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={agronomImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title>Agronom S</Card.Title>
                  <Badge pill variant="light">
                    HTML
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    CSS
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    JavaScript
                  </Badge>
                  <Badge className="ml-2" pill variant="light">
                    React
                  </Badge>

                  <Badge className="mt-2 ml-2" pill variant="light">
                    React-bootstrap
                  </Badge>
                  <Badge className="mt-2 ml-2" pill variant="light">
                    EmailJs
                  </Badge>
                  <Card.Text className="mt-2">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn-sm float-left" variant="primary">
                    <RiEarthFill size="1.6em" /> Demo
                  </Button>
                  <Button className="btn-sm float-right" variant="primary">
                    <FaGithub size="1.5em" /> Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
