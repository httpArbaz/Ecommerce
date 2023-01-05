import React from "react";
import Feature from "../components/feautureProduct/feature";
import Home from "../content/images/supplies/home.jpg";
import Pet from "../content/images/supplies/pet.jpg";
import Indoor from "../content/images/supplies/indoor.jpg";
import Kitchen from "../content/images/supplies/kitchen.webp";
import {ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';
import { useParams } from "react-router-dom";



export default function Category() {
  const { slug } = useParams();

  console.log(slug,"slugg")
  return (
    <div>
        {/* <img
        style={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height:"85vh",
          width:"100%",
          objectFit:"cover",
          filter:"brightness(80%)"
        }}
        src={Home}
      /> */}
        <ParallaxProvider>
    <ParallaxBanner  style={{height:"75vh"}} layers={[{ image: slug === "petsupplies" ? Pet : slug === "kitchensupplies" ? Kitchen : slug === "indoor&outdoorsupplies" ? Indoor : slug === "homesupplies" ? Home : null  , speed:20},
    
  
  ]}
      ></ParallaxBanner>

      </ParallaxProvider>
    
    <div
      style={{
        Width: "80%",
        margin: "auto",
        paddingTop: "0px",
        backgroundColor: "#f5f5f5",
      }}
    >
    
      <Feature />
    </div>
    </div>
  );
}
