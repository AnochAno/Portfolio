import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiMongodb,
  DiGit,
  DiJava,
  DiGoogleCloudPlatform,
} from "react-icons/di";
import {
 
  SiFirebase,
  SiDotnet,
  SiSpringboot,
  SiReact,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMysql,
  SiBootstrap,
  SiC,
  SiAutodesk,
 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
    </Row>
  );
}

export default Techstack;
