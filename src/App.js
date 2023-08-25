// import { useState } from "react";
// import PropTest from "./PropTest";
import "./App.css";
// import NameCheckTest from "./NameCheckTest";
import CompA from "./CompA";
import GlobalContextProvider from "./GlobalContext";

const info = "Totally different info";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <CompA info={info} />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
