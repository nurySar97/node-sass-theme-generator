import React from "react";
import { Button, Badge, Col } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Basic Badges</h2>
          <h1>
            Example heading <Badge bg="secondary">New</Badge>
          </h1>
          <h2>
            Example heading <Badge bg="secondary">New</Badge>
          </h2>
          <h3>
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
          <h4>
            Example heading <Badge bg="secondary">New</Badge>
          </h4>
          <h5>
            Example heading <Badge bg="secondary">New</Badge>
          </h5>
          <h6>
            Example heading <Badge bg="secondary">New</Badge>
          </h6>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Badge part of button</h2>
          <Button variant="primary">
            Profile <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Contextual variations</h2>
          <div className='p-3'>
            <Badge bg="primary">Primary</Badge>{" "}
            <Badge bg="secondary">Secondary</Badge>{" "}
            <Badge bg="success">Success</Badge>{" "}
            <Badge bg="danger">Danger</Badge>{" "}
            <Badge bg="warning" text="dark">
              Warning
            </Badge>{" "}
            <Badge bg="info">Info</Badge>{" "}
            <Badge bg="light" text="dark">
              Light
            </Badge>{" "}
            <Badge bg="dark">Dark</Badge>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Pill</h2>
          <div className='p-3'>
            <Badge pill bg="primary">
              Primary
            </Badge>{" "}
            <Badge pill bg="secondary">
              Secondary
            </Badge>{" "}
            <Badge pill bg="success">
              Success
            </Badge>{" "}
            <Badge pill bg="danger">
              Danger
            </Badge>{" "}
            <Badge pill bg="warning" text="dark">
              Warning
            </Badge>{" "}
            <Badge pill bg="info">
              Info
            </Badge>{" "}
            <Badge pill bg="light" text="dark">
              Light
            </Badge>{" "}
            <Badge pill bg="dark">
              Dark
            </Badge>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
