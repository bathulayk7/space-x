import React from "react";
import { Launch } from "../launch/Launch";
import "./style.css";
import axios from "axios";

export class LaunchList extends React.Component {
  state = {
    launches: [],
  };
  componentDidMount = () => {
    this.getLaunches();
  };
  getLaunches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches/")
      .then((res) => {
        this.setState({
          launches: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  launchList = () => {
    const launchLsitComponents=this.state.launches.map((launch,i) => {
      const img=launch.links.flickr_images.length===0?
      "https://twistedsifter.files.wordpress.com/2012/05/nasa-rocket-launch-high-quality-6.jpg?w=800&h=674"
      :launch.links.flickr_images[0]
      return (
        <Launch key={"launch_"+i}
          banner={img}
          title={launch.mission_name}
          launchDate={launch.launch_date_local}
          discription={launch.details}
        />
      );
    });
    return launchLsitComponents
  };
  render() {
    // console.log(this.state.launches[0]);
    return (
      <div className="launch-list">
        {this.launchList()}
        {/* <Launch
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
        /> */}
      </div>
    );
  }
}
