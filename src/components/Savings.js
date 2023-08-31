import React from 'react';
import './Savings.css';
import {useNavigate} from 'react-router-dom';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PaymentOutlined from '@mui/icons-material/PaymentOutlined';
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined';
import BeachAccessOutlined from '@mui/icons-material/BeachAccessOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import PermContactCalendarOutlined from '@mui/icons-material/PermContactCalendarOutlined'; 
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import SupportOutlined from '@mui/icons-material/SupportOutlined';

function Savings() {
  const navigate = useNavigate();
  const login = ()=> {navigate('/login')}
  const Chat = ()=> {navigate('/ChatApp')}
  const register = ()=> {navigate('/register')}
  const loans = ()=> {navigate('/loan')}
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
            <img className='savings_top_banner' 
            src=''
            alt=''/>
            <div className='banner_note'>
              <h1>REAL ESTATE INVESTMENTS</h1>
              <span>
                Discover bricks & mortar investments with our real estate investment companies.
              </span>
            </div>

          <div className='right_bottom'>
          <div className='right_bottom_header'>
            <h1>DISCOVER OUR REAL ESTATE INVESTMENT SOLUTIONS</h1>
          </div>
            <div className='bottom_banner'>
              <div className='bottom_banner_div'>
              <div>
                  <img className='img' src='https://media.istockphoto.com/id/1130124948/photo/houses-of-different-size-with-different-value-on-stacks-of-coins-concept-of-property-mortgage.jpg?s=612x612&w=0&k=20&c=rIDGdU-I63iXgv9tjuRFZkyNi5RVp89TqI9H2yYGJHQ=' alt='building'/>
                  </div>
                  <div className='locations_div'>
                    <h3>Corporate Real Estate Investment</h3>
                    <span>With this responsible fund, diversify your portfolio and access an investment combining real estate investment and financial investments in the USA.</span>
                    <button onClick={Chat}>Chat with us</button>
                  </div>
                  
                  
              </div>
              <div className='bottom_banner_div'>
              <div>
                  <img className='img' src='https://atcohomes.ng/wp-content/uploads/2021/11/jjj.jpg'
                   alt='Google map'/>
                   </div>
                  <div className='locations_div'>
                    <h3>Real Estate Wealth Tax</h3>
                    <span className='find_us_span'>Find out everything you need to know about the real estate wealth tax...</span>
                    <button onClick={Chat}>Chat with us</button>
                </div>
              </div>
            </div>

          </div>
          </div>
          </div>
        </div> 
        </div>  
    
  )
}

export default Savings;