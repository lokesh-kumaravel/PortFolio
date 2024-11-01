import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh K </span>
            from <span className="purple">  Coimbatore, India.</span>
            <br />
            I am currently pursuing a Bachelor’s degree in Computer Science Engineering at Sri Shakthi Institute of Engineering and Technology, in my third year.
            <br />
            {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion, learn with purpose. Innovate to inspire and create the future!"{" "}
          </p>
          <footer className="blockquote-footer">Lokesh K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
