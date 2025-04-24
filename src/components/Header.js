import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/Userslice';
import { toggleGptSearchView } from '../utils/Gptslice';
import {changeLang} from '../utils/LangSlice'
const Header = () => {
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const gpt=useSelector(store=>store.gpt.showGptSearch)
    const dispatch=useDispatch();
    const handlesignout=()=>{
        signOut(auth).then(() => {
            navigate("/login");
          }).catch((error) => {
            // An error happened.
          });  
    }
    const handleGptsearch=()=>{
      //toggle gpt search button
      dispatch(toggleGptSearchView());
    }
    const handleLangChange=(e)=>{
      console.log(e.target.value);
      dispatch(changeLang(e.target.value))
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            } else {
              dispatch(removeUser())
              navigate("/login")
            }
          });
          return ()=>unsubscribe();
    },[dispatch])
  return (
    <div className='flex justify-center text-purple-300'>
        <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl shadow-lg  flex flex-wrap justify-center max-w-2xl my-5">
            <ul className='flex justify-center space-x-10 my-2'>
                {user?(<>
                    <Link to="/">
                        <li className='hover:text-purple-700 cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/browse">
                        <li className='hover:text-purple-700 cursor-pointer' onClick={handleGptsearch}>{gpt?"Explore":"GPT"}</li>
                    </Link>
                    <Link to="/dashboard"> <li>{user.displayName}</li></Link>
                    
                    {gpt && 
                    <>
                      <select className='bg-white/5 px-3 text-white rounded-full' onChange={handleLangChange}>
                      <option value='en' className='bg-black'>English</option>
                      <option value='hi' className='bg-black'>Hindi</option>
                      <option value='es' className='bg-black'>Spanish</option>
                      </select>
                    </>}
                    <button className='hover:text-red-800 cursor-pointer' onClick={handlesignout}>SignOut</button>
                </>):
                (<>
                    <Link to="/login">
                        <li className='hover:text-purple-700 cursor-pointer'>Login</li>
                    </Link>
                    <Link to="/signup">
                        <li className='hover:text-purple-700 cursor-pointer'>Signup</li>
                    </Link>
                    <li className='hover:text-purple-700 cursor-pointer'>AboutUs</li>
                </>)}
               
                
               
                
            </ul>
        </nav>
        
    </div>
  )
}

export default Header


// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4 flex items-center justify-between max-w-4xl mx-auto mt-4">
//       <h1 className="text-xl font-bold text-gray-800">My Navbar</h1>
//       <ul className="flex space-x-4">
//         <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
//         <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
//         <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;