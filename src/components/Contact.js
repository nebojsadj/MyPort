import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Typed from "react-typed";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <h4 className="mt-5 text-center text-light">Contact</h4>
      <Typed
        strings={[
          "Hello, you want to contact me?",
          "leave a message and press the button below.",
          // "i will reply to you as soon as possible.",
        ]}
        typeSpeed={80}
        backSpeed={20}
        className="d-block typed-text"
      />

      <Row>
        <Col
          md={{ span: 4, offset: 2 }}
          xs={{ span: 10, offset: 1 }}
          style={{ borderLeft: "1px solid white" }}
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label className="text-primary">Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="name"
                  className="input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label className="text-primary">Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="email"
                  className="input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field. Field must contain '@'.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-primary">Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="subject"
                  className="input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="text-primary">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="message"
                  className="input"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
        <Col
          md={{ span: 4, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          style={{
            borderLeft: "1px solid white",
          }}
        >
          <div className="text-light mt-5">
            <p className="text-primary">Phone</p>
            <FiPhoneCall size="1.4em" className="text-light" /> +381 64 4444444
          </div>
          <div className="text-light mt-5">
            <p className="text-primary">Email</p>
            <AiOutlineMail size="1.8em" /> djordjevicn.dev@gmail.com
          </div>
          <div className="text-light mt-5">
            <p className="text-primary">Address</p>
            <GoLocation size="1.5em" className="text-light" /> Smederevo, Serbia
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
