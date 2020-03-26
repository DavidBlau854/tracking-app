import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import SubjectPage from "./components/SubjectsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavBar />
        <Switch>
          <Route path="/" component={SubjectPage} exact />
          <Route path="/SubjectPage" component={SubjectPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
