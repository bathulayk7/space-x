import React from "react";
import { Header } from "./components/Header/Header";
import "./style.css";
import { Launch } from "./components/Header/launch/Launch";

function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        banner="https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg"
        title="FalconSat" 
        launchDate="2006-03-25T10:30:00+12:00"
        discription="some discription"
      />
      <Launch
        banner="https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg"
        title="FalconSat" 
        launchDate="2006-03-25T10:30:00+12:00"
        discription="some discription"
      />
    </div>
  );
}

export default App;
