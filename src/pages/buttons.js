import React from "react";
import { Col, Button } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Basic buttons</h2>
          <Button className="m-3" variant="primary">
            Primary
          </Button>
          <Button className="m-3" variant="secondary">
            Secondary
          </Button>
          <Button className="m-3" variant="success">
            Success
          </Button>
          <Button className="m-3" variant="warning">
            Warning
          </Button>
          <Button className="m-3" variant="danger">
            Danger
          </Button>
          <Button className="m-3" variant="info">
            Info
          </Button>
          <Button className="m-3" variant="light">
            Light
          </Button>
          <Button className="m-3" variant="dark">
            Dark
          </Button>
          <Button className="m-3" variant="link">
            Link
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Outline buttons</h2>
          <Button className="m-3" variant="outline-primary">
            Primary
          </Button>
          <Button className="m-3" variant="outline-secondary">
            Secondary
          </Button>
          <Button className="m-3" variant="outline-success">
            Success
          </Button>
          <Button className="m-3" variant="outline-warning">
            Warning
          </Button>
          <Button className="m-3" variant="outline-danger">
            Danger
          </Button>
          <Button className="m-3" variant="outline-info">
            Info
          </Button>
          <Button className="m-3" variant="outline-light">
            Light
          </Button>
          <Button className="m-3" variant="outline-dark">
            Dark
          </Button>
          <Button className="m-3" variant="outline-link">
            Link
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Button tags</h2>
          <Button className="m-3" href="#">
            Link
          </Button>
          <Button className="m-3" type="submit">
            Button
          </Button>
          <Button className="m-3" as="input" type="button" value="Input" />
          <Button className="m-3" as="input" type="submit" value="Submit" />
          <Button className="m-3" as="input" type="reset" value="Reset" />
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Buttons sizes</h2>
          <Button className="m-3" size="sm">
            Small Primary Button
          </Button>

          <Button className="m-3" size="lg">
            Large Primary Button
          </Button>

          <Button className="m-3" variant="secondary" size="sm">
            Small Secondary Button
          </Button>

          <Button className="m-3" variant="secondary" size="lg">
            Large Secondary Button
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Block buttons</h2>
          <div className="d-grid gap-2">
            <Button className="m-3" size="sm">
              Small primary block-level button
            </Button>

            <Button className="m-3" size="lg">
              Large primary block-level button
            </Button>

            <Button className="m-3" variant="secondary" size="sm">
              Small secondary block-level button
            </Button>

            <Button className="m-3" variant="secondary" size="lg">
              Large secondary block-level button
            </Button>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
