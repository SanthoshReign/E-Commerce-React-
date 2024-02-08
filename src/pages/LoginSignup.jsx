import React from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Enter Name' />
                    <input type="email" placeholder='Enter Email Id' />
                    <input type="password" placeholder='Enter Password' />
                </div>
                <button>Get Started</button>
                <p className="loginsignup-login">
                    Already have an account? 
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <span> Login</span>
                    </Link>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>
                        By creating an account, I agree to ShopMall's Conditions of Use and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;