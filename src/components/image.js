import React from "react";
import styled from "styled-components";

const Default = (props) => {
  let { iWidth, iHeight, iMaxWidth, iMinHeight, ...rest } = props;
  iWidth = iWidth || 100;
  iHeight = iHeight || 100;
  iMaxWidth = iMaxWidth || iWidth;
  iMinHeight = iMinHeight || "initial";
  return (
    <ImageStyled
      className="bg-dark text-light"
      {...rest}
      {...{ iWidth, iHeight, iMaxWidth, iMinHeight }}
    >
      <ImageInnerStyled
        className="bg-transparent text-light"
        {...rest}
        {...{ iWidth, iHeight, iMaxWidth, iMinHeight }}
      />
    </ImageStyled>
  );
};

export default Default;

const ImageStyled = styled.div`
  width: 100%;
  max-width: ${({ iMaxWidth }) => iMaxWidth};
  min-height: (${({ iMinHeight }) => iMinHeight});
`;

const ImageInnerStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ iMaxWidth }) => iMaxWidth};
  min-height: ${({ iMinHeight }) => iMinHeight};
  padding-top: ${({ iWidth, iHeight }) => (iHeight / iWidth) * 100 + "%"};

  &::before {
    display: block;
    content: "${({ iWidth, iHeight }) => iWidth + "x" + iHeight}";
    color: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 1.25rem;
  }
`;
