import React from "react";
import "./style.css";
import { Header } from "./components/Header/Header";
import { Launch } from "./components/launch/Launch";
import { LaunchList } from "./components/LaunchList/LaunchList";

function App() {
  return (
    <div className="App">
      <Header/>
      <LaunchList/>
    </div>
  );
}

export default App;
