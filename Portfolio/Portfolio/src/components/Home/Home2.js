import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Ano.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm an <b className="purple">  undergraduate </b> student 
            in <b className="purple">  Industrial Automation and Robotics </b>   who has fallen in love with 
            programming and believes I've learned quite a bit. 🤷‍♂️ 
              <br />
              <br /> I'm fluent in classics like
              <i>
                <b className="purple"> Java(Spring Boot), Javascript, C#(.NET) and C programming </b>
              </i>
              <br />
              <br />
              My fields of interest include building new &nbsp;
              <i>
                <b className="purple">Industrial Automation and Robotics | Manufacturing Technology | Web & Software technologies | Embedded systems
                
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing Arduino projects & Embedded System, as well as products with 
              <b className="purple"> Spring Boot, .NET, C, and Python,</b> along with
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid rounded-circle" alt="avatar" style={{height:500, width:500}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AnochAno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/anojant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
