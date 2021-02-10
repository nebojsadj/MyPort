import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="mt-5 footer">
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <Row className="mx-auto">
            <Col className="text-center">
              <div className="text-light mt-4 fMore">
                Visit my GitHub for more projects.
              </div>
              <a href="https://github.com/nebojsadj" target="blanc">
                <Button variant="primary" className="text-light mt-3 fBtn">
                  <AiFillGithub size="1.6em" /> Nebojsadj
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="bg-light d-flex mx-auto" width="60%" />
      <Row className="d-flex justify-content-center">
        <p className="text-light fCopy">
          &copy;{new Date().getFullYear()} DjordjevicN
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
