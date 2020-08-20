import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import "./style.css";
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

let zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
}

export class LaunchView extends React.Component {
  
  state = {
    launch: {
      links: {
        flickr_images: [],
      },
    },
  };
  componentDidMount = () => {
    const flightNo = this.props.match.params.flight_number;
    this.getLaunch(flightNo);
  };
  getLaunch = (flightNo) => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + flightNo)
      .then((res) => {
        this.setState({
          launch: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  launchAttribute = (title, key) => {
    const value = this.state.launch[key];
    return (
      <div className="attribute">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    );
  };
  
  render() {
    console.log(this.state.launch.links.flickr_images);
    const hasImg=this.state.launch.links.flickr_images.length>0;
    return (
      <div className="launch-view">
        {this.launchAttribute("Mission Name", "mission_name")}
        {this.launchAttribute("Flight Number", "flight_number")}
        {this.launchAttribute("Launch Date", "launch_date_local")}
        {hasImg &&(
          <Zoom {...zoomOutProperties}>
              {
                this.state.launch.links.flickr_images.map((each, index) =>{
                 return <img key={index} alt="Flickerimg" style={{ width: "100%" }} src={each} />
                })
              }
          </Zoom>)
        }
        <p className="launch-discription">{this.state.launch.details}</p>
      </div>
    );
  }
}
export default withRouter(LaunchView);
