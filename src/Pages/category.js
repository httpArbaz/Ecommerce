import React from "react";
import Feature from "../components/feautureProduct/feature";
import Home from "../content/images/supplies/home.jpg";
import Pet from "../content/images/supplies/pet.jpg";
import Indoor from "../content/images/supplies/indoor.jpg";
import Kitchen from "../content/images/supplies/kitchen.webp";

import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Category() {
  const { slug } = useParams();
  const matches = useMediaQuery("(max-width:700px)");

  console.log(slug,"slugg")
  return (
    <div>
        <img
        alt="etrolly"
        style={{
          // backgroundPosition: "center center",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: matches===true   ? "60vh": "85vh",
          width:"100%",
          objectFit:"cover",
          filter:"brightness(80%)"
        }}
        src={slug === "petsupplies" ? Pet : slug === "kitchensupplies" ? Kitchen : slug === "indoor&outdoorsupplies" ? Indoor : slug === "homesupplies" ? Home : null  }
      />
        {/* <ParallaxProvider>
    <ParallaxBanner  style={{height:"75vh",backgroundPosition:matches === true ? "right":"center"}} layers={[{ image: slug === "petsupplies" ? Pet : slug === "kitchensupplies" ? Kitchen : slug === "indoor&outdoorsupplies" ? Indoor : slug === "homesupplies" ? Home : null  , speed:20},
    
  
  ]}
      ></ParallaxBanner>

      </ParallaxProvider> */}
    
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
