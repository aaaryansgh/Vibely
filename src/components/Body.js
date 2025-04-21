import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './dashboard'
const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/browse",
            element:<Browse />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/signup",
            element:<Signup />
        },{
          path:"/dashboard",
          element:<Dashboard />
        }

    ])
    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
