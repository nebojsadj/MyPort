import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";

function About() {
  return (
    <Container className="text-light">
      <h4 className="text-center text-light mt-5 mb-4 mH">About Me</h4>
      <Row>
        <Col md={{ span: 5, offset: 1 }} xs={{ span: 12 }}>
          <h5 className="text-center text-light mt-5 mb-4 hAbout">About Me</h5>
          <p className="mP">
            Hello I'm Nebojsa Djordjevic frontend developer. I like to work with
            JavaScript and i am focused on ReactJs ecosystem, always open to
            perfecting and learning new things.
          </p>
        </Col>
        <Col md={{ span: 5, offset: 0 }} xs={{ span: 12 }}>
          <h5 className="text-center text-light mt-5 mb-4 hAbout">Education</h5>
          <p className="mP">
            By profession i am a graduate professor of physical education at the
            University of Belgrade. Meanwhile i realized that my passion is
            JavaScript so i decided to dedicate my career to it.
          </p>
        </Col>
      </Row>
      <h5 className="text-center text-light mt-4 hAbout">My Skills</h5>
      <Skills />
    </Container>
  );
}

export default About;
