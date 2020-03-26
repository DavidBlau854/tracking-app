import React from "react";
import "./sideNavBar.css";

function SideNavBar() {
  return (
    <div className="side-bar">
      <nav>
        <ul className="nav-links">
          <li>Profile</li>
          <li>Subjects</li>
          <li>View</li>
          <li>Archive</li>
        </ul>
      </nav>
      <div className="add-subject">Add Tracking Subject</div>
    </div>
  );
}

export default SideNavBar;
