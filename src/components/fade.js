import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Default = (props) => {
  const [isReady, setIsReady] = useState(true);

  useLayoutEffect(() => {
    setIsReady(false);
    setTimeout(() => setIsReady(true), 100);
  }, [setIsReady, props.page]);
  return <FadeStyled isReady={isReady}>{props.children}</FadeStyled>;
};

export default Default;

const FadeStyled = styled.div`
  position: relative;
  top: ${({ isReady }) => `${isReady ? "0" : "-100px"}`};
  will-change: all;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  transition: opacity ${({ isReady }) => (isReady ? "1s" : "0s")} ease-out,
    top ${({ isReady }) => (isReady ? ".5s" : "0s")} ease-out;
`;
