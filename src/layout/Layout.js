import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div id='landing'>
        <Navbar />
        <div id='main-container' className='m-5 p-3'>
          <Outlet />
        </div>
        

        <Footer />
    </div>
  )
}
