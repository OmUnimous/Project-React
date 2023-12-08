import {Card, CardGroup} from 'react-bootstrap';

export function Cards(props){
    const cardStyle = {
        height: '500px', 
      };
      const imageStyle = {
        height: '300px',
        objectFit: 'cover',
      };
    return(
        
<CardGroup>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={props.img} style ={imageStyle}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}