import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-info">
        <h1 className="login-title">SocialSync</h1>
        <p className="login-subtitle">
          Connect with friends and the world around you on Sociopedia.
        </p>
      </div>
      <div className="login-form-container">
        <div className="login-paper">
          <h2 className="login-form-title">Log In</h2>
          <div className="login-box">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="login-input"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="login-input"
              required
            />
            <button className="login-button">Log In</button>
            <p className="login-forgot-password">Forgot password?</p>
            <button className="signup-button">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
