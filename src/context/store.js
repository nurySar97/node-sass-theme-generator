import React, { createContext, useState } from "react";


export const StoreContext = createContext(null);

const Default = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <StoreContext.Provider
      value={{
        toggleSidebar: () => setIsSidebarOpen((prev) => !prev),
        isSidebarOpen,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default Default;
