import React from "react";

const Default = () => {
  return (
    <div className="col-12">
      <div
        className="btn-group m-2"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
          </div>
        </div>
      </div>
      <div
        className="btn-group m-2"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-success">
          Success
        </button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop2"
            type="button"
            className="btn btn-success dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
          </div>
        </div>
      </div>

      <div
        className="btn-group m-2"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-info">
          Info
        </button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop3"
            type="button"
            className="btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
          </div>
        </div>
      </div>
      <div
        className="btn-group m-2"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop4"
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop4">
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
            <a className="dropdown-item" href="buttons-group">
              Dropdown link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
