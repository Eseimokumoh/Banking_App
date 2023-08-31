import React from 'react';
import './Header.css';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <div className='header'>
        <div className='darker'><li>Individuals</li></div>
        <div className='hover'><li>Private Banking</li></div>
        <div className='hover'><li>Professionals</li></div>
        <div className='hover'><li>Businesses</li></div>

        <div className='header_language'>
          <h3>EN</h3>
          <KeyboardArrowDown/>
        </div>
    </div>
  )
}

export default Header;