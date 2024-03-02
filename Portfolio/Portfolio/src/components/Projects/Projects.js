import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import pos from "../../Assets/Projects/pos.jpg";
import ins from "../../Assets/Projects/in.png";
import mobile from "../../Assets/Projects/mob.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Website"
              description="Our ReactJS and Material UI-based eCommerce platform offers a seamless shopping experience. With a diverse product catalog sourced from the Fakestore API, secure payments, and user-friendly order management, customers can enjoy convenient shopping across devices.
              The backend integration with the Fakestore API ensures that the website has access to a diverse catalog of products with realistic descriptions and images. This enhances the authenticity and credibility of the eCommerce platform."
              ghLink="https://github.com/AnochAno/Ecommerce-Web"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Library Managenment System"
              description="Our Library Management System, developed with Java JFrame forms and backed by Java and MySQL, provides comprehensive library management solutions. From cataloging and tracking books to managing memberships and issuing loans, our system streamlines all aspects of library operations. With intuitive interfaces and robust backend functionalities, librarians can efficiently manage resources, track circulation, and generate insightful reports for informed decision-making"
              ghLink="https://github.com/AnochAno/Library-System"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Employee Managenment System"
              description="Our Employee Management System, built with ReactJS and Bootstrap for frontend, and Java with Spring Boot for backend, offers a straightforward solution for employee lifecycle management. From seamless employee registration to editing, deletion, and detailed presentation in tabular format, our system simplifies the entire process. With a user-friendly interface and robust backend integration, HR personnel can efficiently handle employee data, ensuring streamlined operations"
              ghLink="https://github.com/AnochAno/EM_System"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="POS Web App"
              description="Our Point of Sale (POS) system, built with .NET Web Forms for the frontend and .NET with MongoDB for the backend, caters to the needs of small shops. Offering a compact yet efficient solution, our POS system streamlines transactions, inventory management, and sales reporting. With its user-friendly interface and seamless integration with MongoDB, small shop owners can effortlessly manage their business operations, ensuring smooth and efficient service for their customers."
              ghLink="https://github.com/AnochAno/POS"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ins}
              isBlog={false}
              title="Institute Management System"
              description="System combines React and Bootstrap for frontend flexibility, while .NET and SQL Server power the backend for robust functionality. This comprehensive system covers all aspects of institute management, offering functions such as student enrollment, course management, scheduling, attendance tracking, and performance analysis. With its intuitive interface and seamless integration, administrators can efficiently oversee institute operations, ensuring smooth workflow and enhanced productivity."
              ghLink="https://github.com/AnochAno/insitute_Management_Web.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Mobile Applications"
              description="I've developed mobile applications for practice using Java and XML. These applications showcase my proficiency in mobile app development, utilizing Java for backend logic and XML for defining user interfaces. Through these projects, I've gained hands-on experience in building responsive and feature-rich mobile apps, honing my skills in Java programming and XML layout design."
              ghLink="https://github.com/AnochAno/Mobile-Apps.git"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
