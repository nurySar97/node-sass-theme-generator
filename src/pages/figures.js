import React from "react";
import { Col, Figure } from "react-bootstrap";
import Image from "./../components/image";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Basic figures</h2>
          <div className="mb-2">
            <Figure>
              <Image iWidth={171} iHeight={180} showSize />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
