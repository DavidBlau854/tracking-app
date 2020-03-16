import React from "react";
import "./styles/subject.css";

function Subject(props) {
  return (
    <div className="subject">
      <p>{props.title}</p>
    </div>
  );
}

export default Subject;
