import React, { useState, useEffect } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
//import { Form, Button, Row, Col } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import { db, auth, storage } from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/firestore'; 
import {v4 as uuidv4} from 'uuid';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, setDoc, doc, serverTimestamp, getFirestore } from "firebase/firestore"; 
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const Register = ({inputs}) => {
	const [file, setFile] = useState('');
	const navigate = useNavigate();
	 const [data, setData] = useState(null);
	const [percentage, setPercentage] = useState(null);

	useEffect(()=>{
		const uploadFile = () => {
		  
		  const name = new Date().getTime() + file.name
	
		  console.log(name);
		  const storageRef = ref(storage, file.name);
	
		  const uploadTask = uploadBytesResumable(storageRef, file);
	
		  uploadTask.on('state_changed', 
		  (snapshot) => {
		  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		  console.log('Upload is ' + progress + '% done');
		  setPercentage(progress);
		  switch (snapshot.state) {
		  case 'paused':
			console.log('Upload is paused');
			break;
		  case 'running':
			console.log('Upload is running');
			break;
			default: 
			 break;
		}
		}, 
		  (error) => {
			console.log(error);
		}, 
		  () => {
		  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
		  setData((prev)=>({...prev, img: downloadURL}))
		});
	  }
	);
	
		};
		file && uploadFile();
	  }, [file]);

	const handleInput = (e)=> {
		const id = e.target.id;
		const value = e.target.value;
	
		setData((data)=>({...data, [id]: value}));
	  };

	const registerUser = async (e) => {
		e.preventDefault();
		
try {
	// Create a new user with email and password using Firebase Authentication
	const response = await createUserWithEmailAndPassword(
	  auth, 
	  data.email, 
	  data.password,
	);
  
	// Add additional user data to Firestore
	await addDoc(collection(db, 'users'), {
	  ...data,
	  uid: response.user.uid, // Use the UID from the response
	  timestamp: serverTimestamp(),
	});
  
	// Redirect to the login page after successful user creation
	navigate('/login');
  } catch (error) {
	console.log(error);
  }
	} 


	return (
		<div className="new">
			<div className="newContainer">
				<div className="">
					<h4 className="new-top">Get started with us today! By filling out the form given below</h4>
					<div className="profile-container">
					<div className="new-bottom">
							<div className='new-left'>
            				<img className="register-img" src={
              					file ? URL.createObjectURL(file)
              					: 'http://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
             					 alt=''
           						 />
          					</div>
					<div className="new-right">
						<form onSubmit={registerUser}>
							<div className='formInput'>
                				<label htmlFor='file'>           
                  				Image: <DriveFolderUploadOutlined className='icon'/>
                				</label>
                				<input type='file' id='file' 
                				onChange={e=>setFile(e.target.files[0])} 
               					style={{display:'none'}}/>
              				</div>
							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<div>{input.label}</div>
									<input
										id={input.id}
										style={{border:'1px solid green'}}
										type={input.type}
										placeholder={input.placeholder}						
										onChange={handleInput}
									/>
								</div>
							))}

							<div className="checkbox" id="formGridCheckbox">
								<input 
								type="checkbox" 
								label="Accept terms and conditions" />
							</div> 

							<button  disabled={percentage !== null && percentage < 100} type="submit">
								Submit
                			</button>
						</form>
						</div>
							</div>
						
					</div>
				</div>
			</div>
		</div>


	);
}

export default Register;


		