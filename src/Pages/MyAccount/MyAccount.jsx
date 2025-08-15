import React, { useState } from 'react';
import './MyAccount.css';

const MyAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="account-container">
      <h1>Login Here!</h1>
      <p>Login to access your orders, wishlist, and saved items.</p>

      <div className="account-form-wrapper">
        <form onSubmit={handleLogin} className="account-form">
          <h2>Login</h2>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="account-btn">Login</button>

          <p className="signup-text">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
