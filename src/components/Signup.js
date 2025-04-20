import React from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import checkValidData from '../utils/validate'
import { useRef,useState } from 'react'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/Userslice'
import { useDispatch } from 'react-redux'
const Signup = () => {
  const [error,setError]=useState("")
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handlebtnclick=()=>{
    //validate the form data
    const msg=checkValidData(email.current.value,password.current.value)
    setError(msg);
    if(msg) return;
    //Sign up logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName:name.current.value
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/login")
      }).catch((error) => {
        setError(error.message)
      });
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
    // ..
  });


  }
  return (
    <div>
        <div className='min-h-screen flex items-center justify-center bg-black'>
            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col items-center justify-center backdrop-blur-md bg-white/5 border border-white/20 py-5 px-10 rounded-3xl shadow-lg mt-10'>
                <h1 className='text-2xl text-white font-bold mb-8'>Sign Up</h1>
                <input type="text" placeholder='Username' className='bg-white/5 text-white rounded-md p-3 m-2 w-full' ref={name} />
                <input type="text" placeholder='Email' className='bg-white/5 text-white rounded-md p-3 m-2 w-full' ref={email} />
                <input type="password" placeholder='Password' className='bg-white/5 text-white rounded-md p-3 m-2 w-full' ref={password} />
                <p className='text-red-700'>{error}</p>
                <button className='bg-slate-800 text-white rounded-lg p-3 my-8 w-full' onClick={handlebtnclick}>Signup</button>
                <Link to="/login">
                    <p className='font-semi-bold text-blue-500 cursor-pointer'>Already have an account?</p>
                </Link>
                
            </form>
        </div>
    </div>
  )
}

export default Signup
