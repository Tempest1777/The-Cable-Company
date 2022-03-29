import React from "react";

import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <Link to="/dashboard"><li className="listText Dashboard">Dashboard</li>
      <button className="login-button">
        
      </button>
      </Link>
    </div>
  );
};

export default Login;
