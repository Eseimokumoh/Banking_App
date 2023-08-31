import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PaymentOutlined from '@mui/icons-material/PaymentOutlined';
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined';
import BeachAccessOutlined from '@mui/icons-material/BeachAccessOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import PermContactCalendarOutlined from '@mui/icons-material/PermContactCalendarOutlined'; 
import TipsAndUpdatesOutlined from '@mui/icons-material/TipsAndUpdatesOutlined';
import AdsClickOutlined from '@mui/icons-material/AdsClickOutlined';
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined';
import RoomOutlined from '@mui/icons-material/RoomOutlined';


function Home() {
  const navigate = useNavigate();
  const login = ()=> {navigate('/login')}
  const Chat = ()=> {navigate('/ChatApp')}
  const register = ()=> {navigate('/register')}
  const loans = ()=> {navigate('/help')}
  const insurance = ()=> {navigate('/insurance')}
  const savings = ()=> {navigate('/savings')}
  const contact = ()=> {navigate('/')}
  
  return (
    <div className='home'>
            <div className='home_top'>
              <div className='home_logo'>
                <img className='home_img' src='https://logos-download.com/wp-content/uploads/2016/04/BNP_Paribas_logo_logotype_emblem.png' alt='logo'/> 
                <span>The bank for a changing world</span>
              </div>
              <div className='home_buttons'>
                <div>
                  <button onClick={Chat} className='button_first'>
                    <span>Chat with us</span>
                  </button>
                </div>
                <div>
                  <button  onClick= {login} className='button_second'>
                    <LockOutlined className='button_lock'/>
                      <span>Account Login</span>  
                  </button>
                </div>
              </div>
            </div>

        <div className='home_div'>
        <div className='home_left'>
          <div className='left_row'>
              <div className='first'>  
                <div onClick={register} className='icon'>
                  <PaymentOutlined/>
                  Manage <br/> accounts
                </div>       
              </div>

              <div className='second'>
                  <div onClick={loans} className='icon'>
                  <MonetizationOnOutlined/>
                  Loans
                  </div>
              </div>

              <div onClick={insurance} className='third'>
                <div  className='icon'>
                  <BeachAccessOutlined/>
                  Insurance
                </div>
              </div>

              <div onClick={savings} className='fourth'>
                <div className='icon'>
                  <AccountBalanceWalletOutlined/>
                  Savings
                </div>
              </div>

              <div onClick={contact} className='fifth'>
                <div className='icon'>
                  <PermContactCalendarOutlined/>
                  Contact us
                </div>
              </div>
          
          </div>
        </div>
        <div className='home_right'>
          <div className='right_div'>
            <img className='top_banner' 
            src='https://www.bnpparibas.de/app/uploads/sites/21/2022/10/besprechung-am-tisch.jpg'
            alt='banner'/>
            <div className='banner_note'>
              <h1>BECOME A BNP PARIBAS CUSTOMER</h1>
              <span>
                Solutions adapted to your every need : manage your account online, simulate
                your credit, insurance, savings, etc.
              </span>
            </div>

          <div className='right_bottom'>
          <div className='right_bottom_header'>
            <h1>BNP PARIBAS IS ALWAYS WITH YOU</h1>
            <h3>Functionalities and services to get the best of your daily needs</h3>
          </div>
            <div className='bottom_banner'>
              <div className='bottom_banner_div'>
                  <div>
                  <img className='img' src='https://ichef.bbci.co.uk/news/593/mcs/media/images/75209000/jpg/_75209775_143394501.jpg' alt='building'/>
                  </div>
                  <div className='locations_div'>
                    <h3>Discover our international network in video</h3>
                    <span>Our international network dedicated to non resident customers.</span>
                    <div>
                    <button>Discover</button>
                    </div>
                  </div>
              </div>
              <div className='bottom_banner_div'>
                  <div>
                  <img className='img' src='https://cdn-group.bnpparibas.com/uploads/maps/bc4ef47129a76f2d3bab4caddb7849c9.jpg'
                   alt='Google map'/>
                   </div>
                  <div className='locations_div'>
                    <h3>International Branches</h3>
                    <span className='find_us_span'>Locate any of our international branches</span>
                    <div>
                    <button>Find us</button>
                    </div>
                  </div>
              </div>
            </div>

          </div>
          <div className='green_div'>
              <h1>HESITATE NO LONGER...JOIN US</h1>
              <h3>Become a BNP Paribas today and let us find the best solutions according to your needs.</h3>
              <div className='green_column'>
                <div>
                  <RoomOutlined className='icons'/>
                  <h1>OVER 64 COUNTRIES</h1>
                </div>
                <div>
                  <SupportAgentOutlined className='icons'/>
                  <h1>ADVISOR DEDICATED</h1>
                </div>
                <div>
                  <TipsAndUpdatesOutlined className='icons'/>
                  <h1>RENOWED EXPERTISE</h1>
                </div>
                <div>
                  <AdsClickOutlined className='icons'/>
                  <h1>PRIVILEDGED CONTACT</h1>
                </div>
              </div>
              <div className='btn'>
              <button className='button_first'>Chat us</button>
              </div>
          </div>     
          </div>
        </div> 
        </div>  
    </div>
  )
}

export default Home;