import React from "react";
import { useStore } from "./../hooks";

const Default = () => {
  const { isThemeFetching } = useStore();
  if (!isThemeFetching) return null;
  return (
    <div className="preloader">
      <div className="spinner">
        <div className="spinner__inner">
          <div className="spinner__inner">
            <div className="spinner__inner">
              <div className="spinner__inner">
                <div className="spinner__inner">
                  <div className="spinner__inner">
                    <div className="spinner__inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
