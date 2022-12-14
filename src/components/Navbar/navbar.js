import React from 'react'
import "./navbar.css"
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import useMediaQuery from '@mui/material/useMediaQuery';
import  Hamburger from "./ham.js"

function Navbar() {
  const matches = useMediaQuery('(max-width:800px)');
  return (
  <>  {
      matches ? 
      <Hamburger/>

   : 
   <div className='Navbar'>
   <h2>Etrolly</h2>
   <div className='RightNavigations'>
     <a href="/" className='anchor'>Home</a>
     <a href="/" className='anchor'>Store</a>

   
     <a href="/" className='anchor'>About Us</a>
     <a href="/" className='anchor'>Contact Us</a>
     <AddShoppingCartSharpIcon className='anchor' style={{color:"fc5f5f"}}/>

   </div>

  </div>
    }
    </>
    )
}

export default Navbar