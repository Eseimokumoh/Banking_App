import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileNew.css";
import { useNavigate } from "react-router";
import NavBarLoggedIn from "./NavBarLoggedIn";
import {db, auth} from '../components/firebase';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';


const ProfileNew = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const user = auth.currentUser;

     
    useEffect(() => {
        if (user) {
          const uid = user.uid;
          
          const fetchUserData = async () => {
            try {
              const userQuery = query(collection(db, 'users'), where('uid', '==', uid));
              const querySnapshot = await getDocs(userQuery);
    
              if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setUserData(userData);
              } else {
                console.log('User data not found');
              }
            } catch (error) {
              console.error('Error fetching user data: ', error);
            }
          };
    
          fetchUserData();
        }
      }, [user]);
 

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
        <div className="profile">
            <NavBarLoggedIn />
            <div className="container mt-4" style={{ coimagelor: "white", border: "4px solid white", borderRadius: "10px" }}>
                <div className="jumbotron">
                    <div className="account-details">
                    
                        <img style={{ width:'150px', height:'150px',
                            borderRadius:'50%', objectFit:'cover',
                            margin:'20px', border:'4px solid white'}}
                            src={userData.img}/>
            
                        <div className="c2">
                            <h2 className="display-4">{userData.firstName} {userData.lastName}</h2>                    

                            {numbers?.map((number)=>(
                            <div key={number.id} className="accounts">
                                <h2>Account Number: {number.accountNo}</h2>
                                <h2>Balance : ${number.balance - number.amount}.00</h2>
                                <h2>Fixed Deposit: ${number.fd}.00</h2>
                            </div>
                            ))}
                           
                        </div>
                    </div>
                    <hr className="my-4" />

                    {userData ? (
                    <div className="profile-info">
                        <p>Address : {userData.address}, {userData.city} - {userData.zip}, {userData.region}</p>
                        <p>Contact Number : {userData.contact} </p>
                        <p>Email : {userData.email}</p>
                        <p>SSN Number : {userData.ssn} </p>
                        {/* <p>Balance : {balance}</p> */}
                        <p className="lead">
                            <a className="btn btn-success btn-lg mb-2" href="#" role="button">
                                Learn more
                            </a>
                        </p>
                    </div>
                    ) : (
                        <h1>Loading user data...</h1>
                    )}
                </div>
            </div>
        </div>

    );
};

export default ProfileNew;