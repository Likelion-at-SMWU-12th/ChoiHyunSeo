import React, { createContext, useState, useContext } from "react";

const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [part, setPart] = useState("");

  return (
    <PartContext.Provider value={{ part, setPart }}>
      {children}
    </PartContext.Provider>
  );
};

export const usePart = () => useContext(PartContext);
