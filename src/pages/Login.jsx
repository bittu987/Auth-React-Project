import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const handleLoginSubmit =  async (e)=>{
      e.preventDefault();
      try{
       const userCredential = await signInWithEmailAndPassword(auth,email,password);
       const user = userCredential.user;
       console.log(user);
       localStorage.setItem("token",user.accessToken)
       localStorage.setItem("user",JSON.stringify(user));
       navigate("/Home")
      }catch(error){
        alert(error);
      }
      setEmail("")
      setPassword("")
 }
  return (
    <>
    <div className='main-container'>
        <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
        <label htmlFor="email">Email ID :</label>
        <input type="email" name="mail" id="email" required onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Email ID'/>
        </div>
        <div>
        <label htmlFor="password">Password :</label>
        <input type="current-password" name="Password" id="Password" required onChange={(e)=>setPassword(e.target.value)} 
        value={password} placeholder='Enter Password' />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>New on our platform ? <Link to="/Signup">Create Account</Link></p>
    </div>
    
    </>
  )
}

export default Login
