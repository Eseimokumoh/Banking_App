import React from 'react';
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
import {UserAuth} from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBarLoggedIn = () => {
  const navigate = useNavigate();
  const {user, logout} = UserAuth();

  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  }

  const props = {
    items: [
      {
        text: 'Profile',
        link: '/profile'
      },
      {
        text: 'Transfer',
        link: '/transfer'
      },
      {
        text: 'Your Transactions',
        link: '/transactions'
      },
      {
        text: 'Loan',
        link: '/loan'
      },
    ],
    logo: {
      img: 'https://logodix.com/logo/761454.jpg',
      link: '/'
    },
    style: {
      barStyles: {
        background: '#444',
        fontFamily: "'Lato', sans-serif",
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white',
      }
    }
  }
  return (
    <>
  <Navbar {...props}/>
  <button onClick={handleLogout}>Logout</button>
  </>
  )
}

export default NavBarLoggedIn;