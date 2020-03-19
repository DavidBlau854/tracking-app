import React from "react";
import SideBar from "./SideBar";
import "./sideAndPage.css";
import SubjectPage from "./SubjectsPage";

function SideAndPage() {
  return (
    <div className="sideAndPage">
      <SideBar />
      <SubjectPage />
    </div>
  );
}

export default SideAndPage;
