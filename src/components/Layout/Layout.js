import React from 'react'
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/footer"



 function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}



export default Layout
