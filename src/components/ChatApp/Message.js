import React from 'react';
import { auth } from '../firebase';
import './Message.css';


const Message = ({ message }) => {

  return (
    message.uid === auth.currentUser.uid ? (
    <div>
      <div className='sent-message message-message'>
        <p className='name'>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div> ) 
    :
    (
      <div>
      <div className='received-message message-message'>
        <p className='name'>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
    )
  );
};

export default Message;
