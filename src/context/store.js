import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const Default = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isThemeFetching, setIsThemeFetching] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        toggleSidebar: () => setIsSidebarOpen((prev) => !prev),
        isSidebarOpen,
        isThemeFetching,
        setIsThemeFetching,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default Default;
