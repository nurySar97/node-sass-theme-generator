import React from "react";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Input group validation</h2>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>

          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>

          <InputGroup size="sm" className="my-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Default
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup className="my-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl aria-label="Text input with radio button" />
          </InputGroup>

          <InputGroup className="my-3">
            <Button variant="outline-secondary" id="button-addon1">
              Button
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
            <FormControl aria-label="Example text with two button addons" />
          </InputGroup>

          <InputGroup>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
          </InputGroup>

          <InputGroup className="my-3">
            <FormControl aria-label="Text input with dropdown button" />

            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-3"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="Text input with 2 dropdown buttons" />
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-4"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
