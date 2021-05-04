import React from "react";
import { Row, Col } from "react-bootstrap";
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
        <div className="text-center skills">
          <SiHtml5 className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">HTML</p>
          </div>
        </div>
        <div className="text-center skills">
          <SiCss3 className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">CSS</p>
          </div>
        </div>
        <div className="text-center skills">
          <SiJavascript className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">JavaScript</p>
          </div>
        </div>
        <div className="text-center skills">
          <SiReact className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">React</p>
          </div>
        </div>
      </Col>
      <Col
        md={{ span: 8, offset: 2 }}
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS2"
      >
        <div className="text-center skills m4">
          <SiRedux className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">Redux</p>
          </div>
        </div>
        <div className="text-center skills m4">
          <BsBootstrap className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">Bootstrap</p>
          </div>
        </div>
        <div className="text-center skills m4">
          <SiNpm size="3em" className="mt-3 mI1" />
          <div className="d-flex justify-content-center">
            <p className="text fontIcons">NPM</p>
          </div>
        </div>
        <div className="text-center skills m4">
          <FaGitAlt size="3.6em" className="mt-3 mI1" />
          <p className="text fontIcons">Git</p>
        </div>
      </Col>
    </Row>
  );
}

export default Skills;
