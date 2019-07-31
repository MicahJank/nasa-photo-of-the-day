import React from "react";
import "./App.css";
import POTD from "./componenets/main/POTD.js";
import Header from "./componenets/header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <POTD />
    </div>
  );
}

export default App;
