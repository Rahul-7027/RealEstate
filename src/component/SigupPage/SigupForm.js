import React, { useEffect,useState } from 'react'
import Sigup from "./Sigup.css"
const SigupForm = () => {

    // Set Teh State for Email and Password for Login purpose
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // This useEffect Initial State Run of The Data
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    })


    const handleLogin = () => {
        // Hardcoded email and password for demonstration purposes
        const hardcodedEmail = 'user@example.com';
        const hardcodedPassword = 'password';
    
        if (email === hardcodedEmail && password === hardcodedPassword) {
          // Redirect to the next page on successful login
          alert("Welcome to Our Page")
        } else {
          alert('Invalid email or password');
        }
      };
    return (
        <div>
            <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id='semail' placeholder="Email" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id='spass' placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleLogin}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                {/* <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="#">Arun</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="#">here</a>.
                </p> */}
                <p>2023@ copyright</p>
            </footer>
        </div>
    )
}

export default SigupForm
