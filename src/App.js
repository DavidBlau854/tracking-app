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
          <Route path="/subjectPage" component={SubjectPage} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const Profile = () => <h1>profile!!!</h1>;

export default App;
