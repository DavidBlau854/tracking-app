import React from "react";
import "./profile.css";
import profilePic from "../assets/img/profile.jpg";

function Profile() {
  return <img className="prof-pic" src={profilePic} alt="profilePic"></img>;
}

export default Profile;
