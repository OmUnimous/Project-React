import {  Col, Row, Container } from "react-bootstrap";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";
import { Alert } from "react-bootstrap";
import { Cards } from "./Cards";
import card1 from "../images/card1.jpg";
import { ToggleButton } from "../utilities/ToggleButton";
import { CarouselImage } from "./CarouselImage";
import { TeamCards } from "./TeamCards";
import { PFooter } from "./PFooter";
export function About() {
  return (
    <>
    <CarouselImage img1 = {img1} img2 = {img2}></CarouselImage>
      <Alert variant="danger">
        <Row>
          <Col>
            <Cards text="Your only limit is you. Push harder, go further"img={card1}></Cards>
          </Col>
          <Col>
            <Cards text="Strength does not come from the body. It comes from the will." img={card1}
            ></Cards>
          </Col>
          <Col>
            <Cards text="Your body can stand almost anything. It's your mind that you have to convince" img={card1}></Cards>
          </Col>
        </Row>
      </Alert>

      <Row>
        <Col lg>
          <ToggleButton />
        </Col>
        <Col lg>
          <ToggleButton />
        </Col>
        <Col lg>
          <ToggleButton />
        </Col>
      </Row>
      
        
        
     
      <Container className = 'mt-5'>
        
      <TeamCards/>
      </Container>
     <Container className="mt-5">
        <PFooter></PFooter>
     </Container>
      
    </>
  );
}


