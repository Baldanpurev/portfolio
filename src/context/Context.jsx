import { useState } from "react";
import { createContext } from "react";

export const DContext = createContext();

export const Context = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <DContext.Provider
      value={{
        dark: dark,
        setDark: setDark,
      }}
    >
      {children}
    </DContext.Provider>
  );
};
