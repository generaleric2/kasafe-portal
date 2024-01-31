import React from 'react';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './inbox.css';
import MiniDrawer from "../Components/sidebar";
import SendIcon from '@mui/icons-material/Send';

const Mail = () => {
  const options = [
    'John Doe',
    'Alice Smith',
    'Bob Johnson',
    'Eva Williams',
    'Michael Brown',
  ];

  return (
    <>
      <MiniDrawer />
      <form className='container-mail'>
        <h1>Message An Admin</h1>
        <div className="label-container">
          <label htmlFor='nameSelect' className='label'>Select Admin</label>
          <select
            id='nameSelect'
            className='form-select mb-4'
            style={{
              borderRadius: '8px',
              border: '1px solid #ced4da',
              background: '#f8f9fa',
              padding: '8px',
            }}
          >
            {options.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="label-container">
          <label htmlFor='form4Example3' className='label'>Message</label>
          <MDBInput
            wrapperClass='mb-4'
            id='form4Example3'
            rows={4}
            className='message'
            cursorStart={0}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ced4da',
              background: '#f8f9fa',
              marginBottom: "10px",
            }}
          />
        </div>

        <MDBBtn
          type='submit'
          className='mb-4'
          block
          style={{
            background: '#000000',
            color: '#fff',
          }}
        >
        <SendIcon style={{marginRight: "15px"}}/>
          Send Message
        </MDBBtn>
      </form>
    </>
  );
}

export default Mail;
