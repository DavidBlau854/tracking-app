import React from "react";
import "./profile.css";
import profilePic from "../assets/img/profile.jpg";

function Profile() {
  return (
    <div className="profile">
      <img className="prof-pic" src={profilePic} alt="profilePic"></img>
      <h1>stunner</h1>
    </div>
  );
}

export default Profile;
