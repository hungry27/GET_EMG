import React from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/index.css";

function Profile() {
  return (
    <div className="center">
      <ProfileIcon />
      <ProfileCard />
    </div>
  );
}

export default Profile;
