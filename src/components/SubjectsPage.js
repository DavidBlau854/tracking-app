import React from "react";
import Subject from "./Subject";
import "./subjectsPage.css";
import exampleSubjects from "../ExampleSubjects";

class SubjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjects: [] };
  }

  componentDidMount() {
    this.setState({ subjects: exampleSubjects });
  }

  render() {
    return (
      <div className="subjectsPage">
        {this.state.subjects.map(subj => (
          <Subject title={subj.title}></Subject>
        ))}
      </div>
    );
  }
}

export default SubjectsPage;
