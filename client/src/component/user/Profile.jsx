import React from "react";

const Profile = () => {
  return (
    <div>{localStorage.getItem("role") === "admin" ? "admin" : "user"}</div>
  );
};

export default Profile;
