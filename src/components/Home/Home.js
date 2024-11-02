import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import lottie from "lottie-web";
import jsonData from "../../Assets/HomeAnimation.json"; 
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
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
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> LOKESH K</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <div
                  ref={animationContainer}
                  style={{ width: "80%", height: "auto" }} // Adjust size as needed
                ></div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> LOKESH K</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
