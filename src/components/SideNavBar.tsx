import React from "react";
import { Link } from "react-router-dom";
import "./sideNavBar.css";
import logo from "../assets/img/logo.png";

function SideNavBar() {
  return (
    <div className="side-nav-bar">
      <img src={logo} alt="logo"></img>
      <nav>
        <ul className="nav-links">
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/subjectPage">
            <li>Subjects</li>
          </Link>
          <li>View</li>
          <li>Archive</li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavBar;
