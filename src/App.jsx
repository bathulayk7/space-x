import React from "react";
import "./style.css";
import { Header } from "./components/Header/Header";
import { LaunchList } from "./components/LaunchList/LaunchList";
import { LaunchView } from "./components/LaunchView/LaunchView";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Link to="/launch-view">Launch View Link</Link><br/> */}
        {/* <Link to="/launch-list">Launch List Link</Link> */}
        <Switch>
        <Route path="/launch-view/:flight_number" component={LaunchView} />
        <Route path="/" component={LaunchList} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
