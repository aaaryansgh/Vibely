import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import checkValidData from '../utils/validate'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
  const [error,setError]=useState("")
  const navigate=useNavigate();
  const email=useRef(null);
  const password=useRef(null);
  const handlebtnclick=()=>{
    //validate the form data
    const msg=checkValidData(email.current.value,password.current.value)
    setError(msg);
    if(msg) return;
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    navigate("/")
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
    
  });
  }
  return (
    <div>
      <Header />
        <div className='min-h-screen flex items-center justify-center bg-black'>
            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col items-center justify-center backdrop-blur-md bg-white/5 border border-white/20 p-8 rounded-3xl shadow-lg mt-10'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-normal overflow-visible cursor-pointer my-3'>Login</h1>
                <input type="text" placeholder='Email' className='bg-white/5 text-white rounded-md p-3 m-2 w-full' ref={email}/>
                <input type="password" placeholder='Password' className='bg-white/5 text-white rounded-md p-3 m-2 w-full' ref={password}/>
                <p className='text-red-700 font-bold'>{error}</p>
                <button className='bg-white/5 hover:bg-white/15 border border-white/20 text-purple-200 rounded-lg p-3 my-2 w-full' onClick={handlebtnclick}>Login</button>
                
                <Link to="/signup">
                    <p className='text-xl text-purple-200 font-semibold mt-2 cursor-pointer'>New here?</p>
                </Link>
                
            </form>
        </div>
        
    </div>
  )
}

export default Login
