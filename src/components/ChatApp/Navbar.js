import React from 'react';
import ChatSignIn from '../ChatApp/ChatSignIn';
import ChatLogout from '../ChatApp/ChatLogout';
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
    nav: `bg-green-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat with us</h1>
       {user ? <ChatLogout/> : <ChatSignIn/>} 

    </div>
  );
};

export default Navbar;