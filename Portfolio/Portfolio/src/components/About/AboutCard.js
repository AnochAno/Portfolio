import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thankeswaran Anojan </span>
            and I hail from <span className="purple"> Sri Lanka.</span>
            <br /><br />
            I'm currently pursuing a degree in Engineering Technology, specializing in Industrial Automation and Robotics at the University of Kelaniya. Continuing my studies here, I've delved into various subjects including Principles of Engineering, PLC (Programmable Logic Controller), Embedded Systems, C Programming, Java, Manufacturing Technology, Fundamentals of Robotics, Industrial Automation, Electronics, Physics, Applied Mathematics, Sensor Technology and Control Systems.
            <br /><br />
            Moreover, I've augmented my academic journey by completing a comprehensive course in Full Stack Web Development through Coursera's online platform, offered by Meta. This course equipped me with dynamic and modern web development skills, focusing on React & Django development.
            <br />
            
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
