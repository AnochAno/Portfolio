import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNetbeans } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiVisualstudio,
  SiIntellijidea,
  SiAndroidstudio,
  SiArduino,
  SiAutodesk,
  SiRedux,
  SiXampp
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetbeans />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
    </Row>
  );
}

export default Toolstack;
