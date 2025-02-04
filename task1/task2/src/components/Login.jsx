import React from "react";
import '../Styles/login.css';

function Login(){
    return(
        <div>

    <title>login</title>
    {/* <form action=""> */}
    <h2>Login to an account</h2>
    <p class="sub-heading">Enter your info to login your account</p>
    <label for="email">Email address*</label><br/>
    <input type="text" placeholder="Enter your email address"/><br/>
    <label for="password">Password*</label><br>
    <input type="text" placeholder="Enter your password"/><br/>
    
        
           
       <p> <a href="forgot.html">Forgot password</a></p>
    <button><a href="index.html">sign-in</a></button>
    <p>
        Don't have an account? <a href="sign-up.html">sign up</a>
    </p></div>
),
}
export default Login