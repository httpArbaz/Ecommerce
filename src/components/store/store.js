import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css"

 function StoreHero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='StoreHero'>
        <h1     data-aos="fade-top" className='StoreTitle'>Etrolly Store</h1>
    </div>
    
  )
}


export default StoreHero
