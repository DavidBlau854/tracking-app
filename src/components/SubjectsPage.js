import React from "react";
import Subject from "./Subject";
import "./subjectsPage.css";
import * as exampleSubjects from "../ExampleSubjects";

class SubjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ exampleSubjects });
  }

  render() {
    return (
      <div className="subjectsPage">
        {this.state.exampleSubjects.map(subj => (
          <Subject title="subj.title"></Subject>
        ))}
      </div>
    );
  }
}

export default SubjectsPage;
