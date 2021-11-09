import React, { useState } from "react";
import {
  Col,
  Form,
  Button,
  FloatingLabel,
  Row,
  InputGroup,
} from "react-bootstrap";

const Default = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Basic forms</h2>
          <div className="mb-2">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Control
                className="my-3"
                type="text"
                placeholder="Readonly input here..."
                readOnly
              />
              <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
              <Form.Control
                className="my-3"
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
              />
              <Form.Label>Range</Form.Label>
              <Form.Range />

              <Form.Select className="my-3" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <Form.Check
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">File input</h2>
          <div className="mb-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
              <Form.Label>Disabled file input example</Form.Label>
              <Form.Control type="file" disabled />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Small file input example</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Large file input example</Form.Label>
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Sizing</h2>
          <div className="mb-2">
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control type="text" placeholder="Normal text" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Floating labels</h2>
          <div className="mb-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Checkboxes and Radios</h2>
          <div className="mb-2">
            <Form>
              {["checkbox", "radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                  />

                  <Form.Check
                    disabled
                    type={type}
                    label={`disabled ${type}`}
                    id={`disabled-default-${type}`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Form grid</h2>
          <div className="mb-2">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Validation</h2>
          <div className="mb-2">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Input group validation</h2>
          <div className="mb-2">
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" required isInvalid />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
