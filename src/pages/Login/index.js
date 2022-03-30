import React from "react";
import "./styles.css";
import slaclogo from "../../assets/slaclogotransparent.png";
import waves from "../../assets/waves.png";

const Login = () => {
  return (
    <div>
      <img className="Logo" src={slaclogo} alt="Logo" width={120} />
      <div className="basediv">
        <img className="waves" src={waves} alt="Logo" /> 
        <div className="form">
      <div className="form-field username">
        <div className="icon">
          <i className="far fa-user"></i>
        </div>
        <input type="text" placeholder="Username"/>
      </div>
      <div className="form-field password">
        <div className="icon">
          <i className="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Password"/>
      </div>

      <button className="login-button" type="submit">
        LOGIN
      </button>
      
    </div>
  </div>
  <div className="login-card-footer">
   
  </div>
</div>    
        
    

  );
};




export default Login;
