import React from "react";
import "./subject.css";

function Subject(props: any) {
  return (
    <div className="subject">
      <p>{props.title}</p>
    </div>
  );
}

export default Subject;
