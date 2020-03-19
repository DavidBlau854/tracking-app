import React from "react";
import Subject from "./Subject";
import "./subjectsPage.css";
import exampleSubjects from "../ExampleSubjects";
import { ISubject } from "../models/Subject";

class SubjectsPage extends React.Component {
  state: { subjects: ISubject[] } = { subjects: [] };

  componentDidMount() {
    this.setState({ subjects: exampleSubjects }); //server here..
  }

  render() {
    return (
      <div className="subjectsPage">
        {this.state.subjects.map(subj => (
          <Subject key={subj.id} subject={subj}></Subject>
        ))}
      </div>
    );
  }
}

export default SubjectsPage;
