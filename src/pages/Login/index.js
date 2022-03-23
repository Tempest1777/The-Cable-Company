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
      </div>
    </div>
  );
};

export default Login;
