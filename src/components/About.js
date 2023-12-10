import { Col, Row, Container } from "react-bootstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";
import { Alert } from "react-bootstrap";
import { CarouselImage } from "./CarouselImage";
import { TeamCards } from "./TeamCards";
import { Map } from "./Map";
import { Footer } from "./Footer";
import { News } from "./News";

export function About() {
  return (
    <>
      <CarouselImage img1={img1} img2={img2}></CarouselImage>
      <Alert variant="success">
        <Row style={{ textAlign: "center" }}>
          <h2>ABOUT US</h2>
          <p>
            <strong>
              Embark on a transformative fitness experience at our local gym,
              where we go beyond exercise routines to inspire a holistic
              well-being. Our passionate community of fitness enthusiasts forms
              the core of our gym, fostering a sense of camaraderie that makes
              every workout more enjoyable. Our dedicated trainers are not just
              here to guide your physical journey but to also uplift your
              spirits, ensuring that each session is a positive step towards
              your goals. The synergy of our state-of-the-art facilities and
              diverse fitness programs creates an environment where health and
              happiness converge.
            </strong>
          </p>

          <p>
            <strong>
              In addition to our cutting-edge equipment and expert-led classes,
              we prioritize personalized attention. Whether you're targeting
              specific fitness milestones or seeking a supportive space to
              kickstart your fitness routine, we tailor our offerings to suit
              your unique needs. Our gym is not just a place to burn calories;
              it's a vibrant community hub where lasting friendships are formed,
              and healthy lifestyles are cultivated.
            </strong>
          </p>
          <p>
            <strong>
              From invigorating group classes that fuel your energy to
              one-on-one training sessions that cater to your individual
              requirements, we strive to empower you at every step. Join us in
              this fitness adventure, where every drop of sweat symbolizes your
              commitment to becoming a stronger, healthier, and more confident
              version of yourself. Your journey towards a better you begins
              right here, at the heart of fitness in our community – our local
              gym. Embrace the challenge, celebrate the victories, and let's
              achieve greatness together.
            </strong>
          </p>
        </Row>
      </Alert>
      <Container className="mt-5">
        <TeamCards />
      </Container>

      <Container style={{ textAlign: "center" }} className="mt-5">
        <Row>
          <Col>
            <News />
          </Col>
          <Col>
            <Map />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5"></Container>
    <Footer />
    </>
  );
}
