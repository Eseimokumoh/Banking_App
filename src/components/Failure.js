import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./alerts.css";
import { db } from '../components/firebase'; 
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';


const Failure = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "users"), 
            (snapShot) => {
              let users = [];
              snapShot.docs.forEach((doc)=>{
                users.push({id : doc.id, ...doc.data()});
            });
            setUsers(users);
            console.log(users);
            },
            (error) =>{
              console.log("Error", error)
            }
          );    
          return ()=> {
            unsubscribe();
            setUsers(users);
          };
    }, []);


    return (
        <div className="bgsucc">
            <NavBarLoggedIn />
            <div>
                <div className="container">
                    <Alert variant="danger">
                    {users?.map((user)=> (
                        <Alert.Heading>Hello, {user.firstName} {user.lastName}</Alert.Heading>
                    ))}
                        <h1>Transaction Failed!!!</h1>
                        <p>Kindly chat with our support team.</p>
                        <hr />
                    </Alert>
                </div>
            </div>
        </div>

    );
}

export default Failure;