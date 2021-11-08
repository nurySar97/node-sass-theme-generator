import React, { useEffect, useState } from "react";
import {
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Default = () => {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
  const [isLoading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Basic buttons</h2>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
            "Dink",
          ].map((variant) => (
            <Button
              key={variant}
              className="m-1"
              variant={`${variant.toLowerCase()}`}
            >
              {variant}
            </Button>
          ))}
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Outline buttons</h2>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
            "Dink",
          ].map((variant) => (
            <Button
              key={variant}
              className="m-1"
              variant={`outline-${variant.toLowerCase()}`}
            >
              {variant}
            </Button>
          ))}
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Button tags</h2>
          <Button className="m-3" href="#">
            Link
          </Button>
          <Button className="m-1" type="submit">
            Button
          </Button>
          <Button className="m-1" as="input" type="button" value="Input" />
          <Button className="m-1" as="input" type="submit" value="Submit" />
          <Button className="m-1" as="input" type="reset" value="Reset" />
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Buttons sizes</h2>
          <Button className="m-1" size="sm">
            Small Primary Button
          </Button>

          <Button className="m-1" size="lg">
            Large Primary Button
          </Button>

          <Button className="m-1" variant="secondary" size="sm">
            Small Secondary Button
          </Button>

          <Button className="m-1" variant="secondary" size="lg">
            Large Secondary Button
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="6">
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

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Active state</h2>
          <Button className="m-3" variant="primary" size="lg" active>
            Primary button
          </Button>
          <Button className="m-3" variant="secondary" size="lg" active>
            Button
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Disabled state</h2>
          <Button className="m-3" variant="primary" size="lg" disabled>
            Primary button
          </Button>
          <Button className="m-3" variant="secondary" size="lg" disabled>
            Button
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Button loading state</h2>
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Loading…" : "Click to load"}
          </Button>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Checkbox / Radio</h2>
          <ButtonGroup className="mb-2">
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="secondary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Checked
            </ToggleButton>
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <br />
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
          <br />
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Uncontrolled</h2>
          <ToggleButtonGroup
            type="checkbox"
            defaultValue={[1, 3]}
            className="mb-2"
          >
            <ToggleButton id="tbg-check-1" value={1}>
              Checkbox 1 (pre-checked)
            </ToggleButton>
            <ToggleButton id="tbg-check-2" value={2}>
              Checkbox 2
            </ToggleButton>
            <ToggleButton id="tbg-check-3" value={3}>
              Checkbox 3 (pre-checked)
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-1" value={1}>
              Radio 1 (pre-checked)
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2}>
              Radio 2
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              Radio 3
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Controlled</h2>
          <ToggleButtonGroup
            type="checkbox"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton id="tbg-btn-1" value={1}>
              Option 1
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
              Option 2
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
              Option 3
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
