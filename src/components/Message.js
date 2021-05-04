import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

function Message() {
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
          className="text-center
          text-light"
          style={{ margin: "123px auto" }}
        >
          <h4>Thanks!</h4>
          <h5>Your message was sent successfully.</h5>
          <h5>I will answer as soon as possible.</h5>

          <Button onClick={() => history.push("/")} className="fBtn mt-2">
            <RiArrowGoBackLine /> Go back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Message;
