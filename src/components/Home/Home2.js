import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import lottie from "lottie-web";
import jsonData from "../../Assets/Animation.json"; // Adjust the path as needed
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaCode } from "react-icons/fa";

function Home2() {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Load the animation
    lottie.loadAnimation({
      container: animationContainer.current, // Reference to the DOM element
      renderer: "svg", // Render as SVG
      loop: true, // Loop the animation
      autoplay: true, // Autoplay on load
      animationData: jsonData, // Your animation JSON data
    });

    return () => lottie.destroy(); // Clean up the animation on unmount
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've fallen in love with programming, continuously learning and
              growing with every project. Excited to share what I've created! 🚀
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java Fullstack, MERN stack. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and{" "}
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              . Recently, I've also learned React.js and Spring Boot.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div
                ref={animationContainer}
                style={{ width: "auto", height: "auto" }} // Adjust size as needed
              ></div>
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
                  href="https://github.com/lokesh-kumaravel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/lokeshkumaravel29/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lokesh-k-5b7513276/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_lokesh_29_._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
