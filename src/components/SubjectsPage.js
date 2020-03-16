import React from "react";
import Subject from "./Subject";
import "./styles/subjectsPage.css";

function SubjectsPage() {
  return (
    <div className="subjectsPage">
      <Subject title="sports"></Subject>
      <Subject title="friends"></Subject>
      <Subject title="cigarettes"></Subject>
      <Subject title="books"></Subject>
    </div>
  );
}
export default SubjectsPage;
