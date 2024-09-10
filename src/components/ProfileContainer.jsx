import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDescription from "./ProfileDescription";

function ProfileContainer() {
    return (
      <div class="profileContainer">
        <ProfilePicture/>
        <ProfileDescription/>
      </div>
    )
  }

export default ProfileContainer;