import React,{useEffect} from 'react'
import "./index.css"
import Aos from "aos";
import "aos/dist/aos.css";

 function ContactHero() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className='contactHero'>
        <h1     data-aos="fade-top" className='contactTitle'>Contact Us</h1>
    </div>
  )
}



export default ContactHero;