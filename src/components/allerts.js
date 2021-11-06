import React from "react";
import { Alert } from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <div className="col-12">
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
      </div>
      <div className="col-12">
        <h2 className="h2">Alert with link.</h2>
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
      </div>
    </React.Fragment>
  );
};

export default Default;
