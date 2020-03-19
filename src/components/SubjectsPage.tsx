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

  writeEvent(subjectId: string) {
    const clonedState = Object.assign({}, this.state);
    const index = clonedState.subjects.findIndex(subj => subj.id === subjectId);
    clonedState.subjects[index].eventsArray.push({ creationTime: new Date() });
    this.setState(clonedState);
  }

  render() {
    return (
      <div className="subjectsPage">
        {this.state.subjects.map(subj => (
          <Subject
            key={subj.id}
            subject={subj}
            writeEvent={() => this.writeEvent(subj.id)}
          ></Subject>
        ))}
      </div>
    );
  }
}

export default SubjectsPage;
