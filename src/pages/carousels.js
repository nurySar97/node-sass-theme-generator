import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import { Image } from "../components";

const Default = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Carousels basic example</h2>
          <Carousel interval={1000}>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Controlled carousels</h2>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2 text-center">Carousel with fade effect</h2>
          <Carousel fade>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image iWidth={500} iHeight={200} iMinHeight={"250px"} />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
