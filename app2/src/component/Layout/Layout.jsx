import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

import Foot from '../Foot/Foot'




export default function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Foot/>
 
  
   </>
  )
}
