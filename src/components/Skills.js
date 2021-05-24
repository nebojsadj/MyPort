import React from "react";
import { Row, Col } from "react-bootstrap";
import { data1, data2, data3 } from "./SkillsData";

function Skills() {
  return (
    <Row>
      <Col
        md={{ span: 10, offset: 1 }}
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS1"
      >
        {data1.map((el, i) => (
          <div className="text-center skills" key={i + 150}>
            {el.icon}
            <p className="text fontIcons">{el.name}</p>
          </div>
        ))}
      </Col>
      <Col
        md={{ span: 10, offset: 1 }}
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS1"
      >
        {data2.map((el, i) => (
          <div className="text-center skills" key={i + 160}>
            {el.icon}
            <p className="text fontIcons">{el.name}</p>
          </div>
        ))}
      </Col>
      <Col
        md={{ span: 10, offset: 1 }}
        xs={{ span: 12 }}
        className="d-flex justify-content-around mt-5 mS1"
      >
        {data3.map((el, i) => (
          <div className="text-center skills" key={i + 170}>
            {el.icon}
            <p className="text fontIcons">{el.name}</p>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Skills;
