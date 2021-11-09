import React, { useState } from "react";
import {
  ButtonGroup,
  Col,
  Dropdown,
  Button,
  DropdownButton,
  SplitButton,
  FormControl,
} from "react-bootstrap";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Basic Dropdowns</h2>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Dropdown key={variant} className="d-inline-block m-1">
              <Dropdown.Toggle
                variant={variant.toLowerCase()}
                id="dropdown-basic"
              >
                {variant}
              </Dropdown.Toggle>

              <Dropdown.Menu variant={variant.toLowerCase()}>
                <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Split button dropdowns</h2>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Dropdown
              className="d-inline-block m-1"
              key={variant}
              split
              as={ButtonGroup}
            >
              <Button variant={variant.toLowerCase()}>{variant}</Button>

              <Dropdown.Toggle
                split
                variant={variant.toLowerCase()}
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Header>Dropdown header</Dropdown.Header>
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Sizing</h2>
          <div className="mb-2">
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
              <DropdownType
                className="m-1"
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="lg"
                title="Drop large"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
          <div>
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
              <DropdownType
                className="m-1"
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Drop small"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Drop directions</h2>
          <div className="mb-2">
            <div className="mb-2">
              {["up", "down", "start", "end"].map((direction) => (
                <DropdownButton
                  className="m-1"
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="primary"
                  title={` Drop ${direction} `}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ))}

              {["up", "down", "start", "end"].map((direction) => (
                <SplitButton
                  className="m-1"
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Split Drop ${direction}`}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
              ))}
            </div>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Menu alignment</h2>
          <div className="mb-2">
            <DropdownButton
              className="d-inline-block m-1"
              align="start"
              title="Dropdown end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              className="d-inline-block m-1"
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Customization</h2>
          <div className="mb-2">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                Custom toggle
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </Button>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);