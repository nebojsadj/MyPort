import React from "react";
import { Row, Col } from "react-bootstrap";
import reactBootImg from "../pictures/reactBootImg.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNpm,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

function Skills() {
  return (
    <Row>
      <Col
        md={{ span: 8, offset: 2 }}
        xs={{ span: 10, offset: 1 }}
        className="d-flex justify-content-around mt-5"
      >
        <div className="text-center">
          <SiHtml5 size="3em" className="mSkills mI1" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            HTML
          </p>
        </div>
        <div className="text-center">
          <SiCss3 size="3em" className="mSkills mI1" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            CSS
          </p>
        </div>
        <div className="text-center">
          <SiJavascript size="2.8em" className="mSkills mI1" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            JavaScript
          </p>
        </div>
        <div className="text-center">
          <BsBootstrap size="2.5em" className="mSkills mI1" />
          <p className="text-primary" style={{ fontSize: "13px" }}>
            Bootstrap
          </p>
        </div>
        <div className="text-center">
          <img src={reactBootImg} alt="reactBootstrap" className="mI1" />
          <p className="text-primary" style={{ fontSize: "12px" }}>
            R-B
          </p>
        </div>
      </Col>
      <Col
        md={{ span: 8, offset: 2 }}
        xs={{ span: 10, offset: 1 }}
        className="d-flex justify-content-around mt-5"
      >
        <div className="text-center m4">
          <SiReact size="3em" className="mSkills mI2" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            React
          </p>
        </div>
        <div className="text-center m4">
          <SiRedux size="3.1em" className="mSkills mI1" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            Redux
          </p>
        </div>
        <div className="text-center mt-3">
          <SiNpm size="3em" className="mSkills mI2" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            NPM
          </p>
        </div>
        <div className="text-center m4">
          <FaGitAlt size="3.6em" className="mSkills mI3" />
          <p className="text-primary" style={{ fontSize: "14px" }}>
            Git
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
