import React, { useState } from "react";
import './Loan.css';
import { v4 as uuidv4 } from 'uuid';
import NavBarLoggedIn from './NavBarLoggedIn';
import {db} from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";


const Loan = () => {
  const [accountNo, setAccountNo] = useState('');
  const [password, setPassword] = useState('');
  const [ssn, setSsn] = useState(''); 
  const [amount, setAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [statement, setStatement] = useState('');
  const [description, setDescription] = useState('');  
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await addDoc(collection(db,'loan'),
      {
        "accountNo": accountNo,
        "password": password,
        "ssn": ssn,
        "amount": amount,
        "statement":statement,
        "loanType": loanType,
        "description": description,
      });
      alert("We received your application, we will get back to you within 24 hours.");
    } catch (error) {
      console.error("Error sending form data:", error);
    };
        setAccountNo('');
        setPassword('');
        setSsn('');
        setAmount('');
        setStatement('');
        setLoanType('');
        setDescription('');     
  };

  return (
    <div className="bghloan">
    <NavBarLoggedIn/>
     <h2 className='loan-header'>Loans at the lowest interest rate</h2>
    <form className="loanform" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Your Account No.
        </label>
        <input
          type="number"
          className="form-control"
          value={accountNo}
          onChange={(e)=>{setAccountNo(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          SSN No.
        </label>
        <input
          type="text"
          className="form-control"
          value={ssn}
          onChange={(e)=>{setSsn(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Credit Score
        </label>
        <input
          type="statement"
          className="form-control"
          value={statement}
          onChange={(e)=>{setStatement(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Loan Type (Home loan, Car Loan,Gold Loan, Business Loan)
        </label>
        <input
          type="text"
          className="form-control"
          value={loanType}
          onChange={(e)=>{setLoanType(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
        ></textarea>
      </div>
      <button type="submit" className="btn-3 btn-success">
        Submit
      </button>
    </form>
</div>
  );
};

export default Loan;
