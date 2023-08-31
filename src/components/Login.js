import React, { useState } from "react";
//import pass from "../assets/pass.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../components/AuthContext'; 
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');
  
    const { signIn } = UserAuth();

    const loginUser = async (event) => {
        event.preventDefault()
        setError('');
        try {
          await signIn(email, password);
          navigate('/profile');
        } catch (e) {
          setError(e.message);
          console.log(e.message);
        }
       
    };


    return (
        <div>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <Link to='/'>
                             <img src='https://logodix.com/logo/761454.jpg' alt="logo" style={{height:'100px', width:'100px',}} /> 
                         </Link>
                        
                        <form>
                            <h1 className="card-title">Login Page</h1>
                            <div>
                                 <EmailOutlined className="email" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="name-input"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="second-input">
                                 <LockOutlined className="email"/> 
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="name-input"
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="login-button">
                                <Link to="/profile"><button onClick={loginUser}>Login</button></Link>
                            </div>

                            <div className="link">
                                <p className="forgot"><a href="#">Forgot Password</a></p>
                                <Link to="/register"><p className="signup">Sign Up</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;