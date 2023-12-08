import { Card, Button, Col, Row } from "react-bootstrap";
import mem from '../images/mem.jpg'
export function TeamCards() {
  return (
    <>
    <h3 style = {{textAlign: 'center'}}>OUR TEAM</h3>
    <Row className='mt-5'>
      <Col> 
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Omkar Mhatre</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Yogita Zirange</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={mem} />
          <Card.Body>
            <Card.Title>Shyan Shaikh</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  );
}
const cardStyle={
    width: "18rem",
    height :'450px'
}