import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from "../../Assets/Projects/chatapp.png";
// import emotion from "../../Assets/Projects/emotion.png";
import weather from "../../Assets/Projects/weather.png";
import agroConnect from "../../Assets/Projects/agroConnect.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import qrCode from "../../Assets/Projects/qrcode.png";

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
              imgPath={agroConnect}
              isBlog={false}
              title="Agro Connect"
              description="AgroConnect is an e-commerce platform designed to help users post and sell their products, while others can browse, filter, and purchase items. It provides a robust system with features like carts, wishlists, and profile management."
              ghLink="https://github.com/lokesh-kumaravel/AgroConnect"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat App"
              description="This application demonstrates a real-time chat feature using Spring Boot and WebSocket technology. 💬✨ It allows users to connect, send messages, and receive updates in real time! 🚀👥"
              ghLink="https://github.com/lokesh-kumaravel/springboot-websocket-chatApp"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This portfolio showcases a collection of web development projects primarily built with React.js. Each project demonstrates my ability to create dynamic, responsive, and user-friendly interfaces while leveraging modern web technologies. "
              ghLink="https://github.com/lokesh-kumaravel/PortFolio"
              demoLink="https://lokeshportfolio-nine.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrCode}
              isBlog={false}
              title="QR Code generator"
              description="👨‍💻A QR code generator app is a mobile application designed to create Quick Response (QR) codes quickly and easily.🎈 These apps typically offer a user-friendly interface where users can input various types of data, such as text, URLs, contact information, or even Wi-Fi network details, and generate a corresponding QR code.👨‍💻"
              ghLink="https://github.com/lokesh-kumaravel/QRcode-Generator"
              demoLink="https://lokesh-qrcodegenerator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Discover accurate, real-time weather updates with our user-friendly app! Get detailed forecasts, current conditions, and alerts for your location. Stay prepared for any weather with just a few taps!"
              ghLink="https://github.com/lokesh-kumaravel/Weather-App"
              demoLink="https://lokeshweatherapp.netlify.app/"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description=""
              ghLink="https://github.com/lokesh-kumaravel"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
