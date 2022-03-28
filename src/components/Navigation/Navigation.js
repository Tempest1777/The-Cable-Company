import React from "react";
import './Navigation.css';
import Comment from "../../assets/comment.svg"
import Notification from "../../assets/notification.svg"
import CompanyLogo from '../../assets/SLAC-simple-hires-removebg-preview.png'
import {Link} from "react-router-dom";
function Nav(){
  return <html><head></head><div className="background">
  <img src={CompanyLogo} width="170" className="companyLogo"/>
  <button className="button"><p className="CreateNew">+ Create New</p></button>
  <div className="NavigationList">
  <div className="userInfo">
    
    <div className="iconContainer">
    <img src={Notification} width="25" className="icon"/>
    </div>
    <div className="iconContainer">
    <p>John Doe</p>
    </div>
     </div>
      <h1 className="listTitle">MY DESK</h1>
      <ul>
      <Link to="/dashboard"><li className="listText Dashboard">Dashboard</li></Link>
      <Link to="/sentitems"><li className="listText Sent">Sent Items</li></Link>
      <Link to="/cablelisting"><li className="listText Cable">Cable Listing</li></Link>
      <Link to="/documents"><li className="listText Documents">Documents</li></Link>
      </ul>
      <h1 className="listTitle">ACCOUNT</h1>
      <ul>
      <Link to="/settings"><li className="listText Settings">Settings</li></Link>
      <Link to="/logout"><li className="listText Logout">Logout</li></Link>
      </ul>
  </div>
  
</div>;</html>
};

export default Nav;
