import React from "react";
import { useStore } from "./../hooks";
import spinner from "./../assets/images/preloader.gif";

const Default = () => {
  const { isThemeFetching } = useStore();
  if (!isThemeFetching) return null;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 1,
        backgroundColor: "#fff",
      }}
    >
      <img
        style={{
          width: 400,
          height: 300,
        }}
        src={spinner}
        alt="preloader"
      />
    </div>
  );
};

export default Default;
