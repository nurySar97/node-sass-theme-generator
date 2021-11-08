import React from "react";
import {
  Card,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Nav,
  CardGroup,
} from "react-bootstrap";
import { Image } from "./../components";
const Default = () => {
  return (
    <React.Fragment>
      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Cards basic example</h2>
          <Card className='mx-auto' style={{ maxWidth: 286 }}>
            <Image showSize iWidth={286} iHeight={180} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Kitchen Sink</h2>
          <Card className='mx-auto' style={{ maxWidth: 286 }}>
            <Image showSize iWidth={286} iHeight={180} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">Content types</h2>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>

          <Card body>This is some text within a card body.</Card>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Cards title, text, and links</h2>
          <Card className='mx-auto' style={{ maxWidth: 286 }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2">List Groups</h2>
          <Card>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="mt-3">
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="6">
        <div className="component">
          <h2 className="h2 text-center">Header and Footer</h2>

          <Row>
            <Col lg="12">
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mt-3" lg="12">
              <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.{" "}
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Images</h2>
          <Card>
            <Image showSize iWidth={957} iHeight={180} iMaxWidth={"100%"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Image showSize iWidth={957} iHeight={180} iMaxWidth={"100%"} />
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Image Overlays</h2>
          <Card className="bg-dark text-white">
            <Image
              iWidth={957}
              iHeight={270}
              iMaxWidth={100}
              iMinHeight={"270px"}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Navigation</h2>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Card Styles</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {[
              "Primary",
              "Secondary",
              "Success",
              "Danger",
              "Warning",
              "Info",
              "Light",
              "Dark",
            ].map((variant, idx) => (
              <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ maxWidth: 300 }}
                className="m-3"
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Border Color</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {[
              "Primary",
              "Secondary",
              "Success",
              "Danger",
              "Warning",
              "Info",
              "Light",
              "Dark",
            ].map((variant, idx) => (
              <Card
                className="m-3"
                border={variant.toLocaleLowerCase()}
                key={idx}
                style={{ maxWidth: 300 }}
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Card layout</h2>
          <CardGroup>
            <Card>
              <Image iWidth={318} iHeight={160} iMinHeight={"160px"} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Image iWidth={318} iHeight={160} iMinHeight={"160px"} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Image iWidth={318} iHeight={160} iMinHeight={"160px"} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Col>

      <Col className="p-3" lg="12">
        <div className="component">
          <h2 className="h2">Grid cards</h2>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                <Image iWidth={460} iHeight={160} iMinHeight={"160px"} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Default;
