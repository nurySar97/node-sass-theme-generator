import React from "react";
import { CloseButton, Col } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component bg-dark">
          <h2 className="h2 text-center text-light">Close Button</h2>
          <CloseButton className="m-3" />
          <CloseButton className="m-3" disabled />
          <CloseButton className="m-3" variant="white" />
          <CloseButton className="m-3" variant="white" disabled />
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
