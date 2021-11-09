import React from "react";
import { Col } from "react-bootstrap";
import Image from "./../components/image";

const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Images</h2>
          <div className="mb-2">
            <Image className='mb-3' iMaxWidth={"171px"} iWidth={171} iHeight={180} showSize />

            <Image  iWidth={1184} iHeight={250} showSize />
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
