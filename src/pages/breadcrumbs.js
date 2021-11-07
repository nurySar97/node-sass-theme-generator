import React from "react";
import { Breadcrumb, Col } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
        <h2 className="h2">Basic breadcrumb</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
