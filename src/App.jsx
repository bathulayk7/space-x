import React from "react";
import "./style.css";
import { Header } from "./components/Header/Header";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchView } from "./components/LaunchView/LaunchView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Launch } from "./components/launch/Launch";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/launch/:flight_number" component={LaunchView}/>
          <Route path="/">
              <LaunchList/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
