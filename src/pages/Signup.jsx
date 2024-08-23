import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-root">
      <div className="signup-info">
        <h1 className="signup-title">SocialSync</h1>
        <p className="signup-subtitle">
          Connect with friends and the world around you on Sociopedia.
        </p>
      </div>
      <div className="signup-form-container">
        <div className="signup-paper">
          <h2 className="signup-form-title">Sign Up</h2>
          <div className="signup-box">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="signup-input"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="signup-input"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="signup-input"
              required
            />
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Password Again"
              className="signup-input"
              required
            />
            <button className="signup-button">Sign Up</button>
            <button className="login-button">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
