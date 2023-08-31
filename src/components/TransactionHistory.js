import React, { useState, useEffect } from 'react';
import './TransactionHistory.css';
import "./alerts.css";
import { db } from "../components/firebase";
import { collection, onSnapshot } from 'firebase/firestore';
import NavBarLoggedIn from './NavBarLoggedIn';



function TransactionHistory({transacts}) {
  const [transactions, setTransactions] = useState([]);

 


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
    <div className='bgsucc'>
        <NavBarLoggedIn/>
        <h3 className='table-header'>Recent Transactions</h3>
       <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Recipient</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {transactions?.map((transaction)=>(
          <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.recipient}</td>
              <td>${transaction.amount}.00</td>
              <td>{transaction.date}</td>
            </tr>
        ))}
          {transacts?.map((transact) => ( 
            <tr>
              <td>{transact.description}</td>
              <td>{transact.recipient}</td>
              <td>${transact.amount}.00</td>
              <td>{transact.date}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory;