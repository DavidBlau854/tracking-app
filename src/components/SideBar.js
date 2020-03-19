import React from "react";
import "./sideBar.css";

function SideBar() {
  return (
    <div>
      <div className="nav-bar">
        <p>Profile</p>
        <p>Subjects</p>
        <p>View</p>
        <p>Archive</p>
      </div>
      <div className="add-subject">Add Tracking Subject</div>
    </div>
  );
}

export default SideBar;
