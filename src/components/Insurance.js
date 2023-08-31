import React from 'react';
import './Insurance.css';
import {useNavigate} from 'react-router-dom';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PaymentOutlined from '@mui/icons-material/PaymentOutlined';
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined';
import BeachAccessOutlined from '@mui/icons-material/BeachAccessOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import PermContactCalendarOutlined from '@mui/icons-material/PermContactCalendarOutlined'; 
import TuneOutlined from '@mui/icons-material/TuneOutlined';
import SupportOutlined from '@mui/icons-material/SupportOutlined';

function Insurance() {
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
                  <img className='top_banner' 
                  src='https://www.tqgins.com/wp-content/uploads/2021/06/banner-life-insurance-recolor.jpg'
                  alt='banner'/>
                  <div className='banner_note'>
                    <h1>BNP PARIBAS HOME INSURANCE</h1>
                    <span>
                    For owners, tenants or co-tenants of a house or apartment, BNP Paribas Home Insurance(1) protects your home and property with a solution that is tailored to your needs and supports you on a daily basis(2).
                    </span>
                  </div>
      
                <div className='right_bottom'>
                <div className='right_bottom_header'>
                  <h1>DISCOVER BNP PARIBAS HOME INSURANCE</h1>
                </div>
                  <div className='bottom_banner'>
                    <div className='bottom_banner_div'>
                       <div className='left'>
                          <div className='left-first'>
                            <TuneOutlined className='banner-icon'/>
                            <h3>A policy customised to your needs</h3>
                            <p>Basic cover and options customised to your situation and your protection needs.</p>
                          </div>
                          <div className='left-second'>
                            <MonetizationOnOutlined className='banner-icon'/>
                            <h3>Your loyalty is rewarded</h3>
                            <p>No deductible if your first claim occurs more than four years after your policy is taken out(3).</p>
                          </div>
                       </div>
                        
                    </div>
                    <div className='bottom_banner_div'>
                      <div className='right'>
                        <div className='right-first'>
                           <SupportOutlined className='banner-icon'/>
                           <h3>Home maintenance assistance even without a claim</h3>
                           <p>A professional will be sent to your main or secondary residence 24 hours a day, 7 days a week, in case of incidents such as lost keys, water leaks or boiler malfunctions. We pay for their travel fees and the first hour of work(2).</p>
                        </div>
                        <div className='right-second'>
                           <MonetizationOnOutlined className='banner-icon'/>
                           <h3>Financial support in the event of hardship</h3>
                           <p>If the insured home is your main residence, in the event of an insured claim, we will cover your relocation costs or the reimbursement of your monthly mortgage payments for 24 months(2).</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
      
                </div>
                <div className='green_div'>
                    <h1>NEED HELP WITH HOME INSURANCE?</h1>
                     <div className='green-paragraphs'>
                    <div>
                      <h4>Who is insured by my home insurance policy?</h4>
                      <p>All those who live permanently at the insured address*: you, your spouse/partner, your minor children. Peaople who occasionally live with you*, like <br/>
                        your adult children who are single and childless, under 28 years and economically dependent are also covered, for  more information, sign-up and chat with our advisors.</p>
                    </div>
                    <div>
                      <h4>What should I do immediately in case of water damage?</h4>
                      <p>You must immediately turn off water supply, turn off electricity, aerate your home and isolate or elevate your furniture as well as electrical,<br/> appliances and notify 
                        your neighbour, property manager or custodian if the leak is not coming from your home. To notify and alert a claim, please email us or chat with our advisors.</p>
                    </div>
                    <div>
                      <h4>What is covered under the civil liability cover of my home insurance policy?</h4>
                      <p>Public liability corresponds to the obligation to repair the damage caused to others. this cover protects you and your loved ones (your spouse and <br/> children) from 
                        any everyday events for which you may have liability over a third party. You are covered weather you own or rent. this cover also <br/> applies in the course of your 
                        profession if you are a registered childminder at your home and you have reported this fact to us the Personal Public <br/>Liability cover* included in your home policy 
                        covers you for accidental damages that you may cause to others, for example: <br/>
                        1. Your child,playing with his ball, breaks a window at your eighbour's house.<br/>
                        2. You accidentally hit a pedestrian with your bicycle and injure him/herself.<br/> For more inquiries, email us or chat with our advisors.</p>
                    </div>
                    <div>
                      <h4>I'm the owner of a home that I rent out.Do I have to report the claim?</h4>
                      <p>Whether or not your accomodation is occupied, we advise you to report all claims to us and invite your tenant to do the same with their own<br/> insurer if applicable.<br/>
                      Each insurer, depending on the origin of the claim and the damage suffered, will be indicated to each insured person how the claim will be handled.</p>
                    </div>
                    </div>
                    </div>
                </div>     
                </div>
              </div> 
              </div>  
          
        )
}

export default Insurance;