import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ServiceCard = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: 65$</ListGroup.Item>
        <ListGroup.Item>Rating: 4 Star</ListGroup.Item>
       
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
};

export default ServiceCard;
