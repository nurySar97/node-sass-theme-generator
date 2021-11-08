import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Fade } from ".";

const Default = ({ name }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [Page, setPage] = useState(null);

  useEffect(() => {
    void (async function () {
      const response = await import(`./../pages/${name}`);
      const Page = response.default;
      setPage(() => {
        return (
          <Fade name={name}>
            <Row>
              <Col className="bg-primary p-3 rounded-3" lg="12">
                <h1 className="h1 text-capitalize text-light">{name}</h1>
              </Col>
              <Page />
            </Row>
          </Fade>
        );
      });
      setIsFetching(false);
    })();
  }, [name]);

  return isFetching ? (
    <Row>
      <Col className="text-center" lg="12">
        <Spinner size='lg' animation="border" variant="primary" />
      </Col>
    </Row>
  ) : (
    Page
  );
};

export default Default;
