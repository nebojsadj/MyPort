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
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS1"
      >
        <div className="text-center">
          <SiHtml5 size="3em" className="mSkills mI1" />
          <p className="text-primary fontIcons">HTML</p>
        </div>
        <div className="text-center">
          <SiCss3 size="3em" className="mSkills mI1" />
          <p className="text-primary fontIcons">CSS</p>
        </div>
        <div className="text-center">
          <SiJavascript size="2.8em" className="mSkills mI1" />
          <p className="text-primary fontIcons">JavaScript</p>
        </div>
        <div className="text-center">
          <BsBootstrap size="2.5em" className="mSkills mI1" />
          <p className="text-primary fontIcons">Bootstrap</p>
        </div>
        <div className="text-center">
          <img src={reactBootImg} alt="reactBootstrap" className="mI1" />
          <p className="text-primary" style={{ fontSize: "11px" }}>
            Ract <br /> Bootstrap
          </p>
        </div>
      </Col>
      <Col
        md={{ span: 8, offset: 2 }}
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS2"
      >
        <div className="text-center m4">
          <SiReact size="3em" className="mSkills mI2" />
          <p className="text-primary fontIcons">React</p>
        </div>
        <div className="text-center m4">
          <SiRedux size="3.1em" className="mSkills mI1" />
          <p className="text-primary fontIcons">Redux</p>
        </div>
        <div className="text-center mt-3">
          <SiNpm size="3em" className="mSkills mI2" />
          <p className="text-primary fontIcons">NPM</p>
        </div>
        <div className="text-center m4">
          <FaGitAlt size="3.6em" className="mSkills mI3" />
          <p className="text-primary fontIcons">Git</p>
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
