import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { cardData } from "./CardData";
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
        <Col xl={{ span: 10, offset: 1 }} xs={{ span: 12 }}>
          <Row className="text-center">
            {cardData.map((card) => (
              <Col key={card.id} className="d-flex justify-content-around mt-5">
                <Card style={{ width: "19rem" }}>
                  <Card.Img variant="top" src={card.img} height="200px" />
                  <Card.Body
                    className="text-light"
                    style={{ backgroundColor: "#0f242e" }}
                  >
                    <Card.Title className="hPro">{card.name}</Card.Title>
                    {card.badge.map((badge, i) => (
                      <Badge key={i} pill variant="light" className="ml-2">
                        {badge}
                      </Badge>
                    ))}
                    <Card.Text className="mt-2 mP">{card.text}</Card.Text>
                    <a href={card.demo} target="blanc">
                      <Button
                        className="btn-sm float-left fBtn"
                        variant="primary"
                      >
                        <RiEarthFill size="1.6em" /> Demo
                      </Button>
                    </a>
                    <a href={card.code} target="blanc">
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
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
