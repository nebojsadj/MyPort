import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Skills from "./Skills";
import dev from "../pictures/developer.svg";

function About() {
  return (
    <Container className="text-light">
      <h4 className="text-center text-light mt-5 mb-4 mH">About Me</h4>
      <Row>
        <Col lg={{ span: 6 }} xs={{ span: 12 }} sm={{ span: 12 }}>
          <h2 className="text-light mt-5 mb-4 hAbout">
            Hello, I'm <span className="name">Nebojsa Djordjevic</span> frontend
            developer.
          </h2>
          <hr className="firstLine" />
          <p className="mP textAbout">
            I like to work with JavaScript and I'm focused on ReactJs ecosystem,
            always open to perfecting and learning new things.
          </p>
          <p className="mP textAbout">
            By profession I'm a professor of physical education at the
            University of Belgrade. Meanwhile I realized that my passion is
            JavaScript so I decided to dedicate my career to it.
          </p>
        </Col>
        <Col lg={{ span: 6 }} sm={{ span: 12 }}>
          <Image src={dev} className="dev" />
        </Col>
      </Row>
      <h4 className="text-center text-light mt-5 hAbout">My Skills</h4>
      <Skills />
    </Container>
  );
}

export default About;
