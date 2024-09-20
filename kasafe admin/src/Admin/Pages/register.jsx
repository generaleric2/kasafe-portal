import React, { useEffect } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import MiniDrawer from "../Components/sidebar";
import './inbox.css';

const Register = () => {

  useEffect(() => {
    // Check if dark mode is active and apply appropriate styles
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div>
      <MiniDrawer />
      <div className="col-md-10">
        <div className="container-fluid form-style" style={{ marginLeft: '330px', marginTop: "-20px", width: "100%" }}>
          <form className="form" id="registerFO" action="#" name="register" method="POST" onSubmit={() => {}}>
            <h1 className="text-muted text-center" style={{marginTop: "-10px"}}>Register an Admin</h1>
            <hr />
            <div className="row">
              {/* Form Fields */}
              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 100%' }}>
                  <label htmlFor="firstName">First Name:<small className="asterisk"> *</small></label>
                  <input id="firstName" type="text" name="firstName" className="form-input" />
                  <small id="firstnameerr" className="error-text"></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 100%' }}>
                  <label htmlFor="lastName">Last Name:<small className="asterisk"> *</small></label>
                  <input id="lastName" type="text" name="lastName" className="form-input" />
                  <small id="lastnameerr" className="error-text"></small>
                </div>
              </div>

              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 100%' }}>
                  <label htmlFor="address">Address:<small className="asterisk"> *</small></label>
                  <input id="address" type="text" name="address" className="form-input" />
                  <small id="addresserr" className="error-text"></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 100%' }}>
                  <label htmlFor="phonenumber">Phone number:<small className="asterisk"> *</small></label>
                  <input id="phonenumber" type="text" name="phonenumber" className="form-input" />
                  <small id="phonenumbererr" className="error-text"></small>
                </div>
              </div>

              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 100%' }}>
                  <label htmlFor="occupation">Occupation:<small className="asterisk"> *</small></label>
                  <input id="occupation" type="text" name="occupation" className="form-input" />
                  <small id="occupationerr" className="error-text"></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 100%' }}>
                  <label htmlFor="email">Email:<small className="asterisk"> *</small></label>
                  <input id="email" type="text" name="email" className="form-input" />
                  <small id="emailerr" className="error-text"></small>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password">Password:<small className="asterisk"> *</small></label>
                <input id="password" type="password" name="password" className="form-input" />
                <small id="passworderr" className="error-text"></small>
              </div>
            </div>
            <hr className="mt-1" />
            <div className="container FO-form-btn">
              <div className="button1">
                <button className="btn btn-primary mt-1 form-add-btn mr-auto" type="submit" style={{color: "white", backgroundColor: "black", marginLeft: "700px"}}>Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
