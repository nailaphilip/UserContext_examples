import React from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  return (
    <GlobalContextProvider value={"TEST ABC"}>
      {props.children}
    </GlobalContextProvider>
  );
};

export default GlobalContextProvider;
