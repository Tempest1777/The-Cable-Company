import React from "react";
import Navigation from "../../components/Navigation";
import Profile from "../../components/Profile";
import MainArea from "../../components/MainArea/MainArea";

import "./styles.css";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <MainArea/>
      <Profile />
    </div>
  );
};

export default Dashboard;
