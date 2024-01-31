// 2FA Verification Page
import React from 'react';
import './AuthPages.css'; 
import { Link } from 'react-router-dom';

const Twofactor = () => {
  return (
    <div className="auth-container2">
      <img src="/images/kasafe logo.png" alt="logo" className='image'/>
      <h1>2FA</h1>
      <p>
        A verification code has been sent to your email address. Please enter the code below.
      </p>
      {/* 2FA verification form goes here */}
      <form>
        <div className="form-field">
          <label htmlFor="verificationCode">Verification Code:</label>
          <input type="text" id="verificationCode" name="verificationCode" />
        </div>
        <Link to="/home">
        <button type="submit">Verify</button>
        </Link>
      </form>
    </div>
  );
};

export default Twofactor;
