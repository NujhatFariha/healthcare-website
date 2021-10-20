import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./Header.css"
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#463250' }}>

                <div class="container-fluid">
                    <img className="ms-4 logo" src={logo} alt="" style={{ width: '30px' }} />
                    <span className="title ms-1">MediGlow</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto pe-5 ">
                            <li class="nav-item">
                                <Link to="/home" className="text-light text-decoration-none">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" className="text-light text-decoration-none ps-3">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="text-light text-decoration-none ps-3">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className="text-light text-decoration-none ps-3">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signup" className="text-light text-decoration-none ps-3">Sign Up</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to="/login" className="text-light text-decoration-none ps-3">Login</Link>
                            </li> */}

                            <Link to="/login" className="text-light text-decoration-none ps-3">Login</Link>
                            <span className="text-light text-decoration-none ps-3 pe-2">{user.displayName} </span>
                            {user?.email && <button className="btn-logout" onClick={logOut}>Log out</button>}
                        </ul>
                    </div>

                </div>
            </nav >
        </div >
    );
};

export default Header;


