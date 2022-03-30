import React from "react";

import CompanyLogo from "../../assets/SLAC-simple-hires-removebg-preview.png";
import HomeIcon from "../../assets/home-icon.png";
import SendIcon from "../../assets/send-icon.png";
import CableIcon from "../../assets/list-icon.png";
import DocumentsIcon from "../../assets/file-icon.png";
import SettingsIcon from "../../assets/settings-icon.png";
import LogoutIcon from "../../assets/logout-icon.png";

import { Link } from "react-router-dom";

import "./styles.css";

const Nav = () => {
  return (
    <main className="container-Navigation">
      <div className="background">
        <img src={CompanyLogo} width="170" className="companyLogo" />
        <button className="button">
          <p className="CreateNew">Create New</p>
        </button>
        <div className="NavigationList">
          <div className="userInfo">
            <div className="iconContainer"></div>
          </div>
          <h1 className="listTitle">MY DESK</h1>
          <ul>
          <img src={HomeIcon} width="20" className="homeIcon" />
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <li className="listText Dashboard"> Dashboard</li>
            </Link>
            <img src={SendIcon} width="20" className="sendIcon" />
            <Link to="/sentitems" style={{ textDecoration: 'none' }}>
              <li className="listText Sent">Sent Items</li>
            </Link>
            <img src={CableIcon} width="20" className="cableIcon" />
            <Link to="/cablelisting" style={{ textDecoration: 'none' }}>
              <li className="listText Cable">Cable Listing</li>
            </Link>
            <img src={DocumentsIcon} width="20" className="documentsIcon" />
            <Link to="/documents" style={{ textDecoration: 'none' }}>
              <li className="listText Documents">Documents</li>
            </Link>
          </ul>
          <h1 className="listTitle">ACCOUNT</h1>
          <ul>
          <img src={SettingsIcon} width="20" className="settingsIcon" />
            <Link to="/settings" style={{ textDecoration: 'none' }}>
              <li className="listText Settings">Settings</li>
            </Link>
            <img src={LogoutIcon} width="20" className="logoutIcon" />
            <Link to="/logout" style={{ textDecoration: 'none' }}>
              <li className="listText Logout">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
      ;
    </main>
  );
};

export default Nav;
