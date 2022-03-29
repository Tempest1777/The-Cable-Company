import React from "react";

import Notification from "../../assets/notification.svg";
import ProfileIcon from "../../assets/profile-icon-john.png";

import "./styles.css";

const Profile = () => {
  return (
    <main className="profile">
      <div className="profile__heading">
        Hi John, here's the current update of your dashboard
      </div>
      <div className="profile__right">
        <img src={Notification} width="18" className="notifications__icon" />
        <img src={ProfileIcon} width="45" className="notifications__profile" />
        <div className="notifications__name">
        John Doe
      </div>
      </div>
    </main>
  );
};

export default Profile;
