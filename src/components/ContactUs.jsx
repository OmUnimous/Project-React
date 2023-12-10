import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Contactimg from "../images/Contactimg.jpeg";
import Background from "../images/background1.jpeg";
import tele from "../images/tele.png";
import "./ContactUs.css";
import { FaTabletAlt } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export function ContactUs() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={6}>
            {/* <img alt="No Image Found" src={i1} className="height:300px; width:300p" fluid /> */}
            <Image src={Contactimg} fluid />;
          </Col>

          <Col lg={6}>
            <Alert variant="success">
              <h3>Contact Us</h3>
            </Alert>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter your name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Mobile Number"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="Enter your number" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FloatingLabel>
              <Button variant="success" size="lg">
                Submit
              </Button>
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
      <div className="mt-20" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
     <Row className='d-flex justify-content-center align-items-center'>
      
      <Col lg='6' style={{ position: 'relative' }}>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-80%, -80%)', color: 'white' }}>
            Your Text Here
          </p>
          </Col>
          <Col lg='6' style={{  position: 'relative' }}>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            Your Text Here
          </p>
          </Col>
          <Col lg='6' style={{ position: 'relative' }}>
          <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            Your Text Here
          </p>
          </Col>
      </Row>
      </div>
      
    </div>
  );
}

//export default Contactus;
