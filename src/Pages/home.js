import React from 'react'
import Navbar from '../components/Navbar/navbar';
import Hero from "../components/hero/hero"
import Special from '../components/speciality';
import Business  from '../components/business';
import Feature from '../components/feautureProduct/feature';
import Timeline from '../components/TimelineBanner/timeline';
import Footer from "../components/Footer/footer"

 function Home() {
  return (
    <>
     {/* <Navbar/> */}
      <Hero/>
      <Special/>
      <Business/>
      <Feature/>
      <Timeline/>
      {/* <Footer/> */}
    </>
  )
}


export default Home
