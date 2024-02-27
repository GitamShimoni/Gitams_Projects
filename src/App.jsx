import { useState } from "react";
import Homepage from "./Components/Homepage";
import "./App.css";
import Github from "./Components/Github";

function App() {
  return (
    <div className="appmain-container">
      <Github />
      <Homepage />
    </div>
  );
}

export default App;
