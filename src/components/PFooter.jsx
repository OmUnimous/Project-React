
import {  Col, Row, ListGroup } from "react-bootstrap";
export function PFooter(){
    return(
       
        <Row>
             <Col>
             <h4>QUICK LINKS</h4>
        <ListGroup>
      <ListGroup.Item style={listItemStyle}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Col>
    <Col>
    <h4>NEWS LETTER</h4>
        <ListGroup>
      <ListGroup.Item style={listItemStyle}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Col>
    <Col>
    <h4>LATEST NEWS</h4>
        <ListGroup>
      <ListGroup.Item style={listItemStyle}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item style={listItemStyle}>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Col>
    </Row>
    
    )
}

const listItemStyle = {
    border: "none",
    textAlign :"left" // Add this style to remove the border
  };