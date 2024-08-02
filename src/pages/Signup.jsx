import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleLoginSubmit =  async (e)=>{
         e.preventDefault();
         try{
          const userCredential = await createUserWithEmailAndPassword(auth,email,password);
          const user = userCredential.user;
          // console.log(user);
          localStorage.setItem("token",user.accessToken)
          localStorage.setItem("user",JSON.stringify(user));
          
         }catch(error){
           console.error(error);
         }
         alert("Signup Successfully")
         setEmail("")
         setPassword("")
    }

  return (
    <>
    <div className='main-container'>
        <h1>Signup Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
        <label htmlFor="email">Email ID :</label>
        <input type="email" name="mail" id="email" required  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Email ID'/>
        </div>
        <div>
        <label htmlFor="password">Password :</label>
        <input type="current-password" name="Password" required id="Password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter Password' />
        </div>
        <button type='submit'>Login</button>
      </form>
      
      <p>Need to Login? <Link to="/">Login</Link></p>
    </div>
    
    </>
  )
}

export default Signup

