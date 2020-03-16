import React from "react";
import SideBar from "./SideBar";
import "./styles/sideAndPage.css";
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
