import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="signup">
      <div className="signup__container">
        <h2>LOGIN</h2>
        <div className="form-login">
          <form>
            <input className="footer-input" name="email" type="email" placeholder="Your Email" />
            <input className="footer-input" name="password" type="password" placeholder="Your Password" />
            <Link to="news" className="news-link">
              <button className="login-button">LOGIN</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
