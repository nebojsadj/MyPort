import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import shopImg from "../pictures/shop.png";
import weatherImg from "../pictures/WeatherImg.png";
import recipeImg from "../pictures/recipeImg.png";
import todoImg from "../pictures/todoImg.png";
import clubImg from "../pictures/clubImg.jpg";
import cafeImg from "../pictures/cafeImg.png";
import msImg from "../pictures/msImg.png";
import agronomImg from "../pictures/agronomImg.png";
import { RiEarthFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <Container>
      <h4 className="mt-5 text-center text-light mH">Projects</h4>
      <h5 className="mt-3 mb-3 text-center text-light hPro">
        Here you can find some of the projects on which i worked recently
      </h5>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
          <Row className="text-center">
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={shopImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="hPro">Guitars shop</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    Guitar Shop is my version of the web shop app. Works on the
                    principle of SPA concept with rect router.
                  </Card.Text>
                  <a
                    href="https://gallant-mcclintock-f46e86.netlify.app/"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/GuitarShop-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
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
                  <Card.Title className="hPro">Cafe</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    There can be an unlimited number of tables in the cafe and
                    each orders for himself and calculates the bill.
                  </Card.Text>
                  <a
                    href="https://keen-khorana-bfc6c5.netlify.app"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/Cafe-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
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
                  <Card.Title className="hPro">Club Members</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    This is a SPA where the CRUD concept is shown on the example
                    of club members.
                  </Card.Text>
                  <a
                    href="https://vigorous-wiles-0c9f71.netlify.app"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/ClubMembers-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={msImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="hPro">
                    Metaluniver Stojanovic
                  </Card.Title>
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
                  <Card.Text className="mt-3 mP">
                    A classic website made according to the client's
                    requirements.
                  </Card.Text>
                  <a href="https://www.metaluniverstojanovic.rs" target="blanc">
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/MetaluniverStojanovic"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
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
                  <Card.Title className="hPro">Agronom S</Card.Title>
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
                  <Card.Text className="mt-3 mP">
                    A classic website made according to the client's
                    requirements.
                  </Card.Text>
                  <a href="https://www.agronoms.rs" target="blanc">
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/AgronomS"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={recipeImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="hPro">Recipe</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    This application displays recipes, using API calls that are
                    executed with Redux-thunk.
                  </Card.Text>
                  <a
                    href="https://wonderful-mccarthy-7a8de1.netlify.app"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/Recipe-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={todoImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="hPro">Todo</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    A simple list to do, add new tasks, cross out and delete
                    done ones.
                  </Card.Text>
                  <a
                    href="https://silly-nightingale-523d98.netlify.app"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/Todo-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-around mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={weatherImg} height="200px" />
                <Card.Body
                  className="text-light"
                  style={{ backgroundColor: "#0f242e" }}
                >
                  <Card.Title className="hPro">Weather</Card.Title>
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
                  <Card.Text className="mt-2 mP">
                    This is a weather forecast as an exercise for API calls that
                    are executed with Redux-thunk.
                  </Card.Text>
                  <a
                    href="https://cocky-jepsen-bea8e8.netlify.app"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-left fBtn"
                      variant="primary"
                    >
                      <RiEarthFill size="1.6em" /> Demo
                    </Button>
                  </a>
                  <a
                    href="https://github.com/nebojsadj/Weather-React"
                    target="blanc"
                  >
                    <Button
                      className="btn-sm float-right fBtn"
                      variant="primary"
                    >
                      <FaGithub size="1.5em" /> Code
                    </Button>
                  </a>
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
