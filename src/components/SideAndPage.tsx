import React from "react";
import SideNavBar from "./SideNavBar";
import "./sideAndPage.css";
import SubjectPage from "./SubjectsPage";

function SideAndPage() {
  return (
    <div className="sideAndPage">
      <SideNavBar />
      <SubjectPage />
    </div>
  );
}

export default SideAndPage;
