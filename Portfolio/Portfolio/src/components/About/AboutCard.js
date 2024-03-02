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
            from <span className="purple"> Sri Lanka.</span>
            <br /><br />
            I am currently following  Engineering Techlonogy Degree specialized in Industrial Automation and Robotics at University of Kelaniya.
            <br /><br />
            I have completed Full Satck Web Development in Meta.
            <br />
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
