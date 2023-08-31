import React, { useState, useEffect } from 'react';
import './Admin.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore"; 
import { db } from '../components/firebase';
import {v4 as uuidv4} from 'uuid';
import Editpage from './Editpage';


function Admin() {
  const [accountNo, setAccountNo] = useState('');
  const [balance, setBalance] = useState('');
  const [fd, setFd] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [editbox, setEditbox] = useState(false);
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amounts, setAmounts] = useState('');
  const [date, setDate] = useState('');


  const handleAdd = async (e)=> {
    e.preventDefault()
    try {
      await setDoc(doc(db,'numbers', 
      'smart-ID'),
      {
        "accountNo": accountNo,
        "balance" : balance,
        "fd": fd,
        "amount": amount,
        "id": uuidv4()
      });

      await setDoc(doc(db,'transactions',
      'smart-ID'),
      {
        "description": description,
        "recipient": recipient,
        "amounts": amounts,
        "date": date,
      });
      alert("Data added successfully");
      } catch (error) {
        console.log('Error adding document:', error);
        };
        setAccountNo('');
        setAmount('');
        setBalance('');
        setFd(''); 
        setDescription('');
        setRecipient('') ;
        setAmounts('');
        setDate('');
  }


  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "numbers"), 
      (snapShot) => {
        let numbers = [];
        snapShot.docs.forEach((doc)=>{
          numbers.push({id : doc.id, ...doc.data()});
      });
      setNumbers(numbers);
      console.log(numbers);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setNumbers(numbers);
    };
  }, []);

  
  useEffect(()=> {
    const unsubscribe = onSnapshot(
      collection(db, "transactions"), 
      (snapShot) => {
        let transactions = [];
        snapShot.docs.forEach((doc)=>{
          transactions.push({id : doc.id, ...doc.data()});
      });
      setTransactions(transactions);
      console.log(transactions);
      },
      (error) =>{
        console.log("Error", error)
      }
    );

    return ()=> {
      unsubscribe();
      setTransactions(transactions);
    };
  }, []); 


  return (
    <div className='admin-home'>
      <div className='homeContainer'>
        {numbers?.map((number) => (
          <div>
              <h1>Profile Account</h1>
              <h2>Account No: {number.accountNo}</h2>
              <h2>Account No2: {number.receiverAccountNo}</h2>
              <h2>Receiver Bank: {number.bankName}</h2>
              <h2>Amount: {number.amount}</h2>
              <h2>Routing No: {number.routingNo}</h2>
              <h2>Balance: ${number.balance}</h2>
              <h2>Fixed Deposit: ${number.fd}</h2>
          </div>
        ))}
        {transactions?.map((transaction) => (
          <div>
              <h1>TransactionHistory</h1>
              <h2>Description: {transaction.description}</h2>
              <h2>Recipient: {transaction.recipient}</h2>
              <h2>Amount: ${transaction.amounts}.00</h2>
              <h2>Date: {transaction.date}</h2>
          </div>
        ))}
        </div>

        <div >
        <h1>Profile Account</h1>
        <form className='formInput-container'>
            <div className='formInput'>
              <input id='accountNo' type='number'
              placeholder='Account No' 
              onChange={(e)=>{setAccountNo(e.target.value)}}/>
            </div> 
            
             <div className='formInput'>
              <input id='amount' type='number'
              placeholder='Amount' 
              onChange={(e)=>{setAmount(e.target.value)}}/>
            </div> 
            
            <div className='formInput'>
              <input id='balance' type='number'
              placeholder='Balance' 
              onChange={(e)=>{setBalance(e.target.value)}}/>    
            </div> 
            <div className='formInput'>
              <input id='fd' type='number'
              placeholder='Fixed Deposit' 
              onChange={(e)=>{setFd(e.target.value)}}/>   
            </div> 

      
          <h1>Transactions History</h1>
             <div className='formInput'>
              <input id='amount' type='text'
              placeholder='Description' 
              onChange={(e)=>{setDescription(e.target.value)}}/>
            </div> 
            
            <div className='formInput'>
              <input id='balance' type='text'
              placeholder='Recipient' 
              onChange={(e)=>{setRecipient(e.target.value)}}/>    
            </div> 
            <div className='formInput'>
              <input id='fd' type='number'
              placeholder='Amount' 
              onChange={(e)=>{setAmounts(e.target.value)}}/>   
            </div> 
            <div className='formInput'>
              <input id='fd' type='text'
              placeholder='Date' 
              onChange={(e)=>{setDate(e.target.value)}}/>   
            </div> 

          
            <button onClick={handleAdd} >Add New Data</button> 
            <button onClick={(e)=>{
              e.preventDefault()
              setEditbox(true)}}>Edit</button>  
            {editbox === true && <Editpage numbers={numbers} setEditbox={setEditbox}/>}
        </form>  
        </div>
 
        </div>
  
  )
}

export default Admin;