import React, {useState} from 'react';
import { db } from '../components/firebase';
import { doc, setDoc, updateDoc, collection } from "firebase/firestore";


function Editpage({numbers,setEditbox}) {
  const [accountNo, setAccountNo] = useState('');
  const [balance, setBalance] = useState('');
  const [fd, setFd] = useState('');
  const [amount, setAmount] = useState('');


  const editDoc = async (uid) => {
    try {
        await updateDoc(doc(db, 'numbers', uid), {
            "accountNo": accountNo,
            "balance": balance,
            "fd": fd,
            "amount": amount,
        });
        alert("Data added successfully");
    } catch (error) {
        console.log('Error adding document:', error);
    }

    setAccountNo('');
    setBalance('');
    setFd('');
    setAmount('');
};


  return (
    <div>
        <h1>Profile Account</h1>
       <form >
            <div className='formInput'>
              <input id='user' type='number'
              placeholder='Account No' 
              onChange={(e)=>{setAccountNo(e.target.value)}}/>  
            </div> 

            <div className='formInput'>
              <input id='user' type='number'
              placeholder='Amount' 
              onChange={(e)=>{setAmount(e.target.value)}}/>
            </div> 
                 
            <div className='formInput'>
              <input id='order' type='text'
              placeholder='Balance' 
              onChange={(e)=>{setBalance(e.target.value)}}/>       
            </div> 
            <div className='formInput'>
              <input id='capital' type='number'
              placeholder='Fixed Deposit' 
              onChange={(e)=>{setFd(e.target.value)}}/>        
            </div> 
            <button onClick={()=>{
              editDoc({
                "accountNo": accountNo,
                "amount": amount,
                "balance" : balance,
                "fd": fd,              
                  }
              )
              setEditbox(false)
              }}>Update</button>  
            </form> 
        <div>
        </div>
    </div>
  )
}

export default Editpage;


  //const editDoc = async ()=> {
  //   try {
  //     await updateDoc(doc(db,'numbers', 
  //     'smart-ID'),
  //     {"accountNo": accountNo,
  //     "balance" : balance,
  //     "fd": fd, 
  //     "amount": amount,
  //      })
  //     alert("Data added successfully");
  //     } catch (error) {
  //       console.log('Error adding document:', error);
  //       };
  //       setAccountNo('');     
  //       setBalance('');
  //       setFd('');
  //       setAmount('');
  // }