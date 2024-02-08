import React from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign In</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='Enter Email Id' />
                    <input type="password" placeholder='Enter Password' />
                </div>
                <button>Get Started</button>
                <p className="loginsignup-login">
                    New to Shopmall? 
                    <Link to="/signup" style={{textDecoration: 'none'}}>
                        <span> Sign Up</span>
                    </Link>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" />
                    <p>
                        By Login, I agree to ShopMall's Conditions of Use and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;