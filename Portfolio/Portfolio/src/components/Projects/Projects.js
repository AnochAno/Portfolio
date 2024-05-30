import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import pos from "../../Assets/Projects/pos.jpg";
import ins from "../../Assets/Projects/in.png";
import mobile from "../../Assets/Projects/mcb.png";

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
              title="E-Commerce Website - Still Develop"
              description="I independently developed an e-commerce website using React with Vite for rapid development, Tailwind CSS for streamlined styling, and Redux for state management. This project was implemented entirely on the front-end, eliminating the need for a traditional backend. Leveraging React's component-based architecture, Vite's fast build times, Tailwind CSS's utility-first approach, and Redux for efficient state management, I created a responsive and visually appealing e-commerce platform. Despite the absence of a backend, the website effectively showcases products, enables browsing, and facilitates seamless user interaction, demonstrating my proficiency in modern web development technologies and state management with Redux"
              //ghLink="#"
              demoLink="https://selectfy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IOT Base Inventory Managenment System" 
              description="Our group project at university involved developing an IoT-based inventory management system for smart canteens. The application was built using Java for both the backend and the frontend, with the frontend developed using Java JFrame forms. SQL was used for database management. We integrated RFID technology for application authentication and login processes, ensuring secure and efficient access control. This system enhances inventory tracking and management in smart canteens, allowing students and staff to order products. By leveraging IoT capabilities, the system provides real-time data and streamlined operations to improve efficiency and reduce waste."
              ghLink="https://github.com/AnochAno/FCT-SM-Canteen-UniversityGroupProject-.git"
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
              title="Thunder-Activated MCB Automation with Arduino"
              description="I participated in developing a university project involving Arduino, where we automated a Miniature Circuit Breaker (MCB) based on thunder and lightning activity. This project was part of our embedded systems subject. Using Arduino, we designed a system that detects thunder and lightning through sensors and automatically triggers the MCB to prevent electrical damage. This automation enhances safety by providing real-time response to natural electrical disturbances, demonstrating the practical application of embedded systems in improving electrical safety infrastructure."
             //ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
