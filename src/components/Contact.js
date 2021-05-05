import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
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
        className="d-block typed-text hPro"
      />
      <Row>
        <Col
          md={{ span: 4, offset: 2 }}
          xs={{ span: 10, offset: 1 }}
          className="borderLeft"
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="mP"
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
            <Button type="submit" className="fBtn mP">
              Send
            </Button>
          </Form>
        </Col>
        <Col
          md={{ span: 4, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="borderLeft"
        >
          <div className="text-light mt-5 mP">
            <p className="text">Phone</p>
            <FiPhoneCall size="1.4em" className="text-light" /> +381 64 4428044
          </div>
          <div className="text-light mt-5 mP">
            <p className="text">Email</p>
            <AiOutlineMail size="1.8em" /> djordjevicn87@gmail.com
          </div>
          <div className="text-light mt-5 mP">
            <p className="text">Address</p>
            <GoLocation size="1.5em" className="text-light" /> Smederevo, Serbia
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
