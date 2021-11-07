import { useEffect, useState } from "react";

const Default = ({ name }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [Page, setPage] = useState(null);

  useEffect(() => {
    void (async function () {
      const response = await import(`./../pages/${name}.js`);
      const Page = response.default;
      setPage(() => <Page />);
      setIsFetching(false);
    })();
  }, [name]);

  return isFetching ? <h1>Hello</h1> : Page;
};

export default Default;
