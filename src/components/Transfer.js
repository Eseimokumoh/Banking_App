import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transfer.css';
import { db } from '../components/firebase'; // Make sure to import your Firebase configuration correctly
import { doc,setDoc, collection, updateDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import NavBarLoggedIn from './NavBarLoggedIn';
import {v4 as uuidv4} from 'uuid';

function Transfer() {
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pin, setPin] = useState('');
  const [receiverAccountNo, setReceiverAccountNo] = useState('');
  const [routingNo, setRoutingNo] = useState('');
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await updateDoc(doc(db,'numbers', 
      'smart-ID'),
      {"receiverAccountNo": receiverAccountNo,
      "routingNo": routingNo,
      "amount" : amount,
      "bankName" : bankName,
      "pin": pin,
      "timestamp": serverTimestamp(),
      "id": uuidv4()
    })
      await new Promise(resolve => setTimeout(resolve, 7000));
      setLoader(false);
      navigate('/confirmation'); //successful
      } catch (error) {
        console.log('Error adding document', error);
        await new Promise(resolve => setTimeout(resolve, 7000));
        setLoader(false);
        navigate('/failed'); //failed
        };
        setReceiverAccountNo('');
        setRoutingNo('');
        setAmount('');
        setBankName('');
        setPin('');
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

  return (
    <div className='transfer'>
            <NavBarLoggedIn/>
        <div className='transfer-container'>
        <h2 className='transfer-line'>Money Transfer</h2>
        <div>

        <div className='transfer-inputs'>
        {numbers?.map((number)=>(
            <div>
                <h2>my account : {number.accountNo}</h2>
            </div>
        ))}
                  <h3>To :</h3>
            <div>
                <input
                type="text"
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                />
            </div>
            <div>
                <input
                type="number"
                placeholder="Recepient Account No"
                value={receiverAccountNo}
                onChange={(e) => setReceiverAccountNo(e.target.value)}
                />
            </div>
            <div>
                <input
                type="number"
                placeholder="Recepient Routing No"
                value={routingNo}
                onChange={(e) => setRoutingNo(e.target.value)}
                />
            </div>
        </div>

        <div>
            <div>
                <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="pin"
                    placeholder="Pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    />
            </div>
        </div>

        </div>
        <button onClick={handleTransfer}>
        {loader ? 'Transferring...' : 'Transfer Money'}
        </button>
        </div>
    </div>
  );
}

export default Transfer;
