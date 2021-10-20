import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeFirebaseApp from "../../Firebase/firebase.init";
import useAuth from '../../hooks/useAuth';
import './Login.css';
initializeFirebaseApp();

const Login = () => {
    const auth = getAuth();

    const { signInUsingGoogle} = useAuth();
    const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleEmailChange = e => {

        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {

        setPassword(e.target.value);


    }
    const handleLogIn = (e) => {
        console.log(email, password);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });




    }

    return (
        <div className="login-form mt-5 text-center">
            <div className="mt-5 pt-5">
            <h2 className="mt-5">{loggedInUser.email}</h2>
            <div> 
                <h4 className="mb-3 fw-bold" style={{color: 'rgb(116, 31, 143)'}}>Please Login</h4>
                <form onSubmit={handleLogIn}>
                    <input style={{border: '1px solid', borderRadius: '10px', padding: '5px 30px'}}   onChange={handleEmailChange} type="text" placeholder="Email" required />
                    <br /><br />
                    <input style={{border: '1px solid', borderRadius: '10px', padding: '5px 30px'}}    onChange={handlePasswordChange} type="password" placeholder="Password" required />
                    <br /><br />
                    <input className="btn btn-primary"type="submit" value="Submit" />
                </form>
                <p className="text-danger">{error}</p>

                <br />
                <p>new to Our Site <Link to='/signup'>Create Account</Link></p>
                <br /> <br />
                <div>
                    <button onClick={signInUsingGoogle} className="btn btn-success">Google Sign In</button>
                </div>
            </div>
            </div>
            
         
        </div>
    );
};

export default Login;