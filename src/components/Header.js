import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const handlesignout=()=>{
        signOut(auth).then(() => {
            navigate("/login");
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div className='flex justify-center text-purple-200'>
        <nav className="fixed top-0 w-full backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl shadow-lg  flex flex-wrap justify-center max-w-2xl my-5">
            <ul className='flex justify-center space-x-10 my-2'>
                {user?(<>
                    <Link to="/">
                        <li className='hover:text-purple-700 cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/browse">
                        <li className='hover:text-purple-700 cursor-pointer'>Explore</li>
                    </Link>
                    <li>{user.displayName}</li>
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