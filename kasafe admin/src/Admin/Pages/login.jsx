// Login Page
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css'; // Apply styles specific to authentication pages

const Login = () => {
  return (
    <div className="auth-container">
       <img src="/images/kasafe logo.png" alt="logo" className='image'/>
      <h1>Login</h1>
      <form>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <Link to="/2fa">
        <button type="submit">Login</button>
        </Link>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
