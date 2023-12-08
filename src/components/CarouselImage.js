import { Carousel } from "react-bootstrap";

export function CarouselImage(props) {
    const imageStyle={
        height : '700px',      
    }
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={props.img2}
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
}
