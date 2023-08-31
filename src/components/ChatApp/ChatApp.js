import React from 'react';
import Chat from '../ChatApp/Chat';
import './ChatApp.css';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function ChatApp() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className='section-Container'>
      <section >
        {user ? <Chat/> : null}
      </section>
      
    </div>
  );
}

export default ChatApp;