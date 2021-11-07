import React from "react";
import { ButtonGroup, Button, Col } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col lg="12">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Col>

      <Col lg="12"></Col>

      <Col lg="12"></Col>

      <Col lg="12"></Col>

      <Col lg="12"></Col>

      <Col lg="12"></Col>
    </React.Fragment>
  );
};

export default Default;
