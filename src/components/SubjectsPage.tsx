import React from "react";
import Subject from "./Subject";
import "./subjectsPage.css";
import { ISubject } from "../models/Subject";
import { getAllDocs, postEvent } from "../backend/endpoints";

class SubjectsPage extends React.Component {
  state: { subjects: ISubject[] } = { subjects: [] };

  componentDidMount() {
    getAllDocs().then((docs) => this.setState({ subjects: docs }));
  }

  writeEvent(subjectId: string) {
    const clonedState = Object.assign({}, this.state);
    const index = clonedState.subjects.findIndex(
      (subj) => subj.id === subjectId
    );
    const newEvent = { creationTime: new Date() };
    clonedState.subjects[index].eventsArray.push(newEvent);
    this.setState(clonedState);
    postEvent(subjectId, newEvent);
  }

  render() {
    return (
      <div className="subjectsPage">
        {this.state.subjects.map((subj) => (
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
