import React from "react";
import './Navigation.css';

import CompanyLogo from '../../assets/SLAC-simple-hires-removebg-preview.png'
function Nav(){
  return <html><head></head><div className="background">
  <img src={CompanyLogo} width="170" className="companyLogo"/>
  <button className="button"><p className="CreateNew">+ Create New</p></button>
  <div className="NavigationList">
      <h1 className="listTitle">MY DESK</h1>
      <ul>
          <li className="listText">Dashboard</li>
          <li className="listText">Sent Items</li>
          <li className="listText">Cable Listing</li>
          <li className="listText">Reports</li>
          <li className="listText">Documents</li>
      </ul>
      <h1 className="listTitle">ACCOUNT</h1>
      <ul>
          <li className="listText">Settings</li>
          <li className="listText">Support</li>
          <li className="listText">Logout</li>
      </ul>
  </div>
  
</div>;</html>
};

export default Nav;
