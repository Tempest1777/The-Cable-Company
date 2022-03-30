import React from "react";
import "./styles.css";
import slaclogo from "../../assets/slaclogotransparent.png";
import waves from "../../assets/waves.png";

import {Link} from "react-router-dom";

const Login = () => {
  return (
    <main className="login__content">
      <form className="login__form">
      <img className="Logo" src={slaclogo} alt="Logo" width={120} />
      <div className="login__title">Login</div>
      <div className="basediv">
      
        <div className="form">
          <div className="form-field username">
            <div className="icon">
              <i className="far fa-user"></i>
            </div>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-field password">
            <div className="icon">
              <i className="fas fa-lock"></i>
            </div>
            <input type="password" placeholder="Password" />
          </div>
          <Link to="/dashboard">
          <button className="login-button" type="submit">
            LOGIN
          </button>
          </Link>
        </div>
      </div>
      </form>
      <div className="login-card-footer"></div>
      <img className="waves" src={waves} alt="Logo" />
    </main>
  );
};

export default Login;
