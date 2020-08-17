import React from "react";
import { Launch } from "../launch/Launch";
import "./style.css"

export class LaunchList extends React.Component {
  render() {
    return (
      <div className="launch-list">
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
        <Launch
          banner="https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          discription="some discription"
        />
      </div>
    );
  }
}
