import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import send from "../pictures/message.svg";
import emailjs from "emailjs-com";
import Typed from "react-typed";

function Contact() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_avtcxxb",
          "template_2snhhon",
          event.target,
          "user_EFNEKYsE5ii41w7j3BanV"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();
      setValidated(false);
      history.push("/message");
    }
  };

  return (
    <Container>
      <h4 className="mt-5 text-center text-light mH">Contact</h4>
      <Typed
        strings={[
          "Hello, you want to contact me?",
          "leave a message and press the button below.",
        ]}
        typeSpeed={80}
        backSpeed={20}
        className="d-block typed-text hPro mb-5"
      />
      <Row>
        <Col md={{ span: 4, offset: 1 }} xs={{ span: 10, offset: 1 }}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mP mt-4"
          >
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label className="text">Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label className="text">Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="email"
                  name="email"
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
                <Form.Label className="text">Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="subject"
                  name="subject"
                  className="input"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="text">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="message"
                  name="message"
                  className="input"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <button type="submit" className="btn fBtn mP">
              Send
            </button>
          </Form>
        </Col>
        <Col md={{ span: 7, offset: 0 }} xs={{ span: 12, offset: 0 }}>
          <Image src={send} className="sendSVG" />
          <div className="text-light text-center mt-4 textAbout mP">
            <AiOutlineMail size="1.8em" /> djordjevicn87@gmail.com
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
