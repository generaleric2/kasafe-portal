import React from 'react';
import MiniDrawer from "../Components/sidebar";
import './mail.css';
import Button from 'react-bootstrap/Button';
import CreateIcon from '@mui/icons-material/Create';

const InboxPage = () => {
  const dummyMessages = [
    { id: 1, sender: 'John', subject: 'Hello there!', text: 'How are you doing?' },
    { id: 2, sender: 'Alice', subject: 'Meeting Tomorrow', text: 'Don\'t forget the meeting at 3 PM tomorrow.' },
    { id: 3, sender: 'Bob', subject: 'Report Update', text: 'Please check the latest report updates.' },
  ];

  return (
    <div>
      <MiniDrawer />
      <Button href="/mail" className="compose-button"><CreateIcon />Compose</Button>
      <div className="inbox-container">
        <h2>Inbox</h2>
        <ul className="inbox-list">
          {dummyMessages.map((message) => (
            <li key={message.id} className="inbox-item">
              <div className="inbox-item-header">
                <span className="inbox-item-sender">{message.sender}</span>
                <span className="inbox-item-subject">{message.subject}</span>
              </div>
              <p className="inbox-item-text">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InboxPage;
