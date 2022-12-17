import React,{useEffect} from 'react'
import "./index.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from '@mui/material/Divider';
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className='Footer'>
        <div className='FooterMenu'>
            <div data-aos="fade-top" className='menuChild'>
                <p className='headTitle'>The Name You Trust</p>
                <p className='childTitle'> Speed || Reliability || Quality</p>
            </div>
        
            <div className='menuChild'>
                <p className='headTitle'>Quick Links</p>

               

                <a className='FootAnchor' href="/" >About Us</a>
                <a className='FootAnchor' href="/">Visit Store</a>
                <a className='FootAnchor' href="/">Let's Connect</a>
          
            </div>
        </div>
        <div data-aos="fade-top" className='social' >
            <FacebookIcon style={{
                color:"#3b5998",
            }} className='Footericons'/>
            <InstagramIcon style={{
                borderRadius:"3px",
                color:"white",
                background : 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                //  color: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
                 
            }} className='Footericons'/>
            <YouTubeIcon style={{
                color:"#FF0000"
            }} className='Footericons'/>

        </div>

        <Divider/>
        <div style={{margin:"auto"}} className='menuChild'>
                <h2 style={{
                    color:"#116466"
                }}>Etrolly</h2>
            </div>
        <div style={{marginBottom:"55px"}} className='FooterMenu'>
            <p data-aos="fade-right" className='childTitle highlight'> ©2023 <p style={{fontWeight:"600",marginLeft:"5px"}}> {" "}Etrolly </p></p>
            <p data-aos="fade-left" className='childTitle highlight'>powered by the <p style={{fontWeight:"600",marginLeft:"5px"}}> {" "}Etrolly </p></p>
        </div>

    </div>
  )
}

export default Footer