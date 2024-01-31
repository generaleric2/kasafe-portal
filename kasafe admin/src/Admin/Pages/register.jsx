import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import MiniDrawer from "../Components/sidebar";
import './inbox.css';

const Register = () => {
  return (
    <div>
      <MiniDrawer />
      <div className="col-md-10">
        <div className="container-fluid form-style" style={{ marginLeft: '330px', marginTop: "2px" }}>
          <form className="form" id="registerFO" action="#" name="register" method="POST" onSubmit={() => {}}>
            <h1 className="text-muted text-center">Register an Admin</h1>
            <hr />
            {/* Add your form fields here */}
            <div className="row">
              {/* Example form field */}
              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 50%' }}>
                  <label htmlFor="firstName">First Name:<small className="asterisk"> *</small></label>
                  <input id="firstName" type="text" name="firstName" />
                  <small id="firstnameerr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 50%' }}>
                  <label htmlFor="lastName">Last Name:<small className="asterisk"> *</small></label>
                  <input id="lastName" type="text" name="lastName" />
                  <small id="lastnameerr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
              </div>
              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 50%' }}>
                  <label htmlFor="address">Address:<small className="asterisk"> *</small></label>
                  <input id="address" type="text" name="address" />
                  <small id="addresserr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 50%' }}>
                  <label htmlFor="phonenumber">Phonenumber:<small className="asterisk"> *</small></label>
                  <input id="phonenumber" type="text" name="phonenumber" />
                  <small id="phonenumbererr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
              </div>
              <div className="col" style={{ display: 'flex' }}>
                <div className="form-field" style={{ marginRight: '10px', flex: '0 0 50%' }}>
                  <label htmlFor="occupation">Occupation:<small className="asterisk"> *</small></label>
                  <input id="occupation" type="text" name="occupation" />
                  <small id="occupationerr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
                <div className="form-field" style={{ flex: '0 0 50%' }}>
                  <label htmlFor="email">Email:<small className="asterisk"> *</small></label>
                  <input id="email" type="text" name="email" />
                  <small id="emailerr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="password">Password:<small className="asterisk"> *</small></label>
                <input id="password" type="text" name="password" />
                <small id="passworderr" style={{ color: 'red', fontWeight: 'bold', fontSize: 'small' }}></small>
              </div>
              {/* Add more form fields */}
            </div>
            {/* Add more sections of the form */}
            <hr className="mt-1" />
            <div className="row">
              {/* Add more form fields */}
            </div>
            <div className="row">
            </div>
            <div className="container FO-form-btn">
              <div className="button1">
                <button className="btn btn-primary mt-1 form-add-btn mr-auto" type="submit" style={{color: "white", backgroundColor: "black"}}>Add New</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
