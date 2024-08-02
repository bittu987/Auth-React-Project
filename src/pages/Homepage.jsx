import React from 'react'
import { signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import { auth } from '../firebase';

const Homepage = () => {

  const navigate = useNavigate();

  const handleLogout = async()=>{
     await signOut(auth);
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     navigate('/')
  }

  return (
    <div className='main-container'>
      <h2>Congratulation! Now you are on Homepage</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Homepage
