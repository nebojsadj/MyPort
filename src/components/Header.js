import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Form, Image } from "react-bootstrap";
import screen from "../pictures/screen.jpg";
import { SiReact } from "react-icons/si";
import Navigation from "./Navigation";
import "react-typed/dist/animatedCursor.css";

function Header() {
  const [logo, setLogo] = useState(false);

  return (
    <Container fluid className="headerColor">
      <Row className="d-flex justify-content-center hold">
        {logo ? (
          <div className="logoHolder mt-5">
            <SiReact size="8em" className="reactLogo mt-3" />
          </div>
        ) : (
          <Image src={screen} className="amoled mt-5" />
        )}
      </Row>
      <Row className="d-flex justify-content-center mt-1">
        <Form.Check
          onClick={() => setLogo(!logo)}
          className="text-light mt-1"
          type="switch"
          label={logo ? "on" : "off"}
          id="check"
        />
      </Row>
      <Navigation />
    </Container>
  );
}

export default Header;
