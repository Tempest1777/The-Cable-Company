import React from "react";
import "./styles.css";
import SLACLOGO from "../../assets/slaclogotransparent.png";
import WAVES from "../../assets/waves.png";
import MAIL from "../../assets/mail.png";
import LOCK from "../../assets/lock.png";

import {Link} from "react-router-dom";

const Login = () => {
  return (
    <main className="login__content">
      <form className="login__form">
      <img className="Logo" src={SLACLOGO} alt="Logo"/>
      <div className="login__title">Login</div>
      
      
        <div className="form">
          
          <div className="form-field username">User Portal Email/Account Name
            <div className="icon">
            <img className="mailIcon" src={MAIL} alt="Email" width="20"/>
           
            </div>
            <input type="text"  />
          </div>
          <div className="form-field password">Password
            <div className="icon">
            <img className="mailIcon" src={LOCK} alt="Lock" width="20"/>
    
            </div>
            <input type="password" />
          </div>
          <Link to="/dashboard">
          <button className="login-button" type="submit">
            LOGIN
          </button>
          </Link>
        </div>
   
      </form>
      <div className="login-card-footer"></div>
      <img className="waves" src={WAVES} alt="Waves" />
    </main>
  );
};

export default Login;
