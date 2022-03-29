import React from "react";
import Navigation from "../../components/Navigation";
import Profile from "../../components/Profile";

import "./styles.css";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <Profile />
    </div>
  );
};

export default Dashboard;
