import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skills from "./Skills";

function About() {
  return (
    <Container className="text-light">
      <h4 className="text-center text-light mt-5 mb-4">About Me</h4>
      <Row>
        <Col md={{ span: 4, offset: 0 }} xs={{ span: 10, offset: 1 }}>
          <h5 className="text-center text-light mt-5 mb-4">About Me</h5>
          <p>
            Hello, my name is Nebojsa Djordjevic JavaScript developer
            specializing in React ecosystem.
          </p>
        </Col>
        <Col md={{ span: 4, offset: 0 }} xs={{ span: 10, offset: 1 }}>
          <h5 className="text-center text-light mt-5 mb-4">Education</h5>
          <p>
            By profession I am a graduate professor of physical education,
            University of Belgrade.
          </p>
        </Col>
        <Col md={{ span: 4, offset: 0 }} xs={{ span: 10, offset: 1 }}>
          <h5 className="text-center text-light mt-5 mb-4">Technologies</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            est rem voluptate inventore sit voluptas molestiae repudiandae
            accusamus dolores, accusantium cupiditate rerum numquam explicabo
            tenetur ex doloremque? Rerum, expedita ab.
          </p>
        </Col>
      </Row>
      <h5 className="text-center text-light mt-4">My Skills</h5>
      <Skills />
    </Container>
  );
}

export default About;
