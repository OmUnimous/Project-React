import { Card, Button, Col, Row } from "react-bootstrap";
import mem from '../images/mem.jpg'
export function TeamCards() {
  return (
    <>
    <h2 style = {{textAlign: 'center'}}>OUR TEAM</h2>
    <Row className='mt-5'>
      <Col> 
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Omkar Mhatre</Card.Title>
           
            
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Yogita Zirange</Card.Title>
           
            
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Shyan Shaikh</Card.Title>
            
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
}
const cardStyle={
    width: "18rem",
    height :'350px',
    textAlign: ' center',
    fontWeight : 'bold'
}