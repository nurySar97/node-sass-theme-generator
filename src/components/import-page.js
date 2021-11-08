import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
              <Col className="bg-secondary p-3 rounded-3" lg="12">
                <h1 className="h1 text-capitalize text-info">{name}</h1>
              </Col>

              <Page />
            </Row>
          </Fade>
        );
      });
      setIsFetching(false);
    })();
  }, [name]);

  return isFetching ? <h1>Hello</h1> : Page;
};

export default Default;
