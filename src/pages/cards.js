import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Image } from "./../components";
const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Button tags</h2>
          <Card style={{ maxWidth: 286 }}>
            <Image className='bg-dark text-light' iWidth={286} iHeight={180} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
