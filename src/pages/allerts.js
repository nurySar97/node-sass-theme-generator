import { Button, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Default = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <Col lg='6'>
        <h2 className="h2">Allert</h2>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </Col>

      <Col lg='6'>
        <h2 className="h2">Links</h2>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert with{" "}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click
            if you like.
          </Alert>
        ))}
      </Col>
      
      <Col lg='12'>
        <h2>Additional content</h2>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </Col>

      <Col lg='12'>
        <h2 className="h2">Dismissing</h2>
        {show ? (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        ) : (
          <Button onClick={() => setShow(true)}>Show Alert</Button>
        )}
      </Col>
    </React.Fragment>
  );
};

export default Default;
