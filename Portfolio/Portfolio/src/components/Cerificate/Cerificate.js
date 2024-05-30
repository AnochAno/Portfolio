import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";



import img1 from "./Img/iot.jpg";
import img2 from './Img/maui.jpg'
import img3 from "./Img/python.jpeg";
import img4 from "./Img/js.jpeg";
import img5 from "./Img/git.jpeg";
import img6 from "./Img/be.jpeg";
import img7 from "./Img/fe.jpeg";


const details = [
  {
    id: 1,
    title: "Completion Certificate for Internet of Things (IoT)",
    dis: "I completed the Internet of Things (IoT) course on Udemy in December 2023. The course covered essential IoT concepts, technologies, and applications, providing hands-on experience with IoT devices, data communication, and cloud integration.",
    img: img1,
    link: 'https://www.udemy.com/certificate/UC-5707c1c8-16f4-4c80-8caa-98bf7a76efc8/'
  },
  {
    id: 2,
    title: "Completion Certificate for .NET MAUI Framework - C#",
    dis: "I completed the .NET MAUI Development course. The course covered essential .NET MAUI concepts, technologies, and applications, providing hands-on experience with mobile app development, cross-platform UI design, and backend integration.",
    img: img2,
    link: 'https://www.udemy.com/certificate/UC-09ff7a9c-c796-4d3d-bea4-455e9c736ed8/'
  },
  {
    id: 3,
    title: "Completion Certificate for Programming in Python",
    dis: "I completed the Programming in Python course on Coursera. The course covered essential Python programming concepts, data structures, and applications, providing hands-on experience with coding and problem-solving.",
    img: img3,
    link: 'https://coursera.org/share/03f1fe388a7f1d640a6afa2da0a8c395'
  }
  ,
  {
    id: 4,
    title: "Completion Certificate for Programming with JavaScript",
    dis: "Covering basic and advanced concepts. From variables to DOM manipulation, delve into event handling, asynchronous programming, and modern frameworks like React or Vue.js. Through hands-on exercises, gain the skills to build dynamic web applications.",
    img: img4,
    link: 'https://coursera.org/share/fff0064ab2966455d4bd6ff13b10d09d'
  },
  {
    id: 5,
    title: "Completion Certificate for Version Control",
    dis: "This course equipped me with essential skills in utilizing Git, a powerful distributed version control system widely used in software development. Through hands-on exercises and practical projects and I gained proficiency in managing code versions in my projects. ",
    img: img5,
    link: 'https://coursera.org/share/1b70497fb5524238517ba9a01da8077e'
  }
  ,
  {
    id: 6,
    title: "Completion Certificate for Introduction to Back-End Development",
    dis: "Using Django provides a comprehensive introduction to server-side programming. Delve into building dynamic web applications with Django, a robust Python framework. Gain proficiency in API development, architectural principles, and other foundational concepts",
    img: img6,
    link: 'https://coursera.org/share/6434436135fd630481f663ce82cb5a4b'
  },
  {
    id: 7,
    title: "Completion Certificate for Introduction to Front-End Development",
    dis: "It covers HTML, teaching the basics of structuring web content; CSS, focusing on styling and layout techniques for web pages; Bootstrap, demonstrating how to utilize this popular CSS framework to create responsive designs quickly; and basic React, introducing the essentials of building dynamic user interfaces with this JavaScript library",
    img: img7,
    link: 'https://coursera.org/share/268a2ea5d38604af7d72b6ebc1ec00ff'
  }
];

export default function Certificate() {
  return (
    <div style={{ paddingTop: '4rem'  }}>
      <Container fluid className="home-section mt-7">
        <Row>
          {details.map((data) => (
            <Col key={data.id} sm={6} className="mb-3 mb-sm-0 g-4">
              <div className="project-card-view">
                <div className="card-body">
                  <h5 className="card-title" style={{padding: 10, backgroundColor: 'purple', color: 'white'}} role="button" >{data.title}</h5>
                  <div style={{ height: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={data.img}
                      alt={data.title}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '100%' }}
                    />
                  </div><br/>
                  <p className="card-text" style={{ textAlign: 'start' }}>
                    {data.dis}
                  </p>
                  <div>
                  
                  </div>
                </div>
                
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
