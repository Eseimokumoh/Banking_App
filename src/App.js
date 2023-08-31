import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } 
from 'react-router-dom';
import { userInputs, transacts } from './formSource';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import  Login  from './components/Login';
import { AuthContextProvider } from './components/AuthContext';
import ProfileNew from './components/ProfileNew';
import Admin from './components/Admin';
import Transfer from './components/Transfer';
import Success from './components/Success';
import Failure from './components/Failure';
import TransactionHistory from './components/TransactionHistory';
import ProtectedRoute from './ProtectedRoute';
import Loan from './components/Loan';
import ChatApp from './components/ChatApp/ChatApp';
import Insurance from './components/Insurance';
import HomeLoan from './components/HomeLoan';
import Savings from './components/Savings';

function App() {
  return (
    <div  className="App">
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
        <Route path='/savings' element={<><Header/><Savings/><Footer/></>}/>
        <Route path='/help' element={<><Header/><HomeLoan/><Footer/></>}/> 
        <Route path='/insurance' element={<><Header/><Insurance/><Footer/></>}/>  
        <Route  path='/ChatApp' element={<><ChatApp/><Footer/></>}/>
        <Route  path='/loan' element={<><Loan/><Footer/></>}/>
        <Route  path='/transactions' element={<><TransactionHistory transacts={transacts}/><Footer/></>}/>
          <Route  path='/failed' element={<><Failure/><Footer/></>}/>
          <Route  path='/confirmation' element={<><Success/><Footer/></>}/>
          <Route  path='/transfer' element={<><Transfer/><Footer/></>}/>
          <Route  path='/admin' element={<><Header/><Admin/><Footer/></>}/> 
          <Route  path='/profile' element={<ProtectedRoute><ProfileNew /><Footer/></ProtectedRoute>}/> 
          <Route path='/login' element={<><Header/><Login/><Footer/></>}/>   
          <Route path='/register' element={<><Header/><Register inputs={userInputs}/><Footer/></>}/> 
          <Route path='/' element={<><Header/><Home/><Footer/></>}/>   
        </Routes>   
      </AuthContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
