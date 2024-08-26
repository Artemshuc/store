import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function Layout({handleCategory}) {
  return (
    <div>
        <Header handleCategory={handleCategory}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout