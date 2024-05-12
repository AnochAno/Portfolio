import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiMongodb,
  DiGit,
  DiJava,
  DiGoogleCloudPlatform,
  DiPython,
  DiMaterializecss,
} from "react-icons/di";
import { FaRobot } from "react-icons/fa";
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
  SiSolid,
  SiMaterialdesign,
  SiVite,
  SiTailwindcss,
  SiRedux,
 
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
        <SiTailwindcss/>
       
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
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
    </Row>
  );
}

export default Techstack;
