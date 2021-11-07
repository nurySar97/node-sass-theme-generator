import React from "react";
import {
  ButtonGroup,
  Button,
  Col,
  ButtonToolbar,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Basic button groups</h2>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Button groups toolbar</h2>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button>5</Button> <Button>6</Button> <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Mix input groups with button groups</h2>
          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup className="me-2" aria-label="First group">
              <Button variant="secondary">1</Button>{" "}
              <Button variant="secondary">2</Button>{" "}
              <Button variant="secondary">3</Button>{" "}
              <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </InputGroup>
          </ButtonToolbar>

          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button variant="secondary">1</Button>{" "}
              <Button variant="secondary">2</Button>{" "}
              <Button variant="secondary">3</Button>{" "}
              <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
            </InputGroup>
          </ButtonToolbar>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Button groups sizing</h2>
          <ButtonGroup size="lg" className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup size="sm">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Nesting</h2>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>

            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-nested-dropdown"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Vertical variation</h2>
          <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>

            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-1"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>

            <Button>Button</Button>
            <Button>Button</Button>

            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-2"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              as={ButtonGroup}
              title="Dropdown"
              id="bg-vertical-dropdown-3"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
