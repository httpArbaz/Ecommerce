import React, { useEffect } from "react";
import "./index.css";
import HomeWorkSharpIcon from "@mui/icons-material/HomeWorkSharp";
import SoupKitchenSharpIcon from "@mui/icons-material/SoupKitchenSharp";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import DoorFrontSharpIcon from "@mui/icons-material/DoorFrontSharp";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Special() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2300 },
      items: 4,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
    },
  };





  return (
    <div className="Special">
      <h2 className="specialTitle">Specialities</h2>
      {/* <div className="SpecialBox"> */}

      <Carousel
        infinite={true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "smalldesktop",
          "superLargeDesktop",
        ]}
        autoPlay="true"
        autoPlaySpeed={3000}
        responsive={responsive}
      >
        <Link  onClick={() =>   window.scrollTo(0, 0)} to="/homesupplies" style={{textDecoration:"none",color:"black"}}>
          <div  className="divv">
            <div className="circle">
              <HomeWorkSharpIcon className="icons" />
            </div>
            <h3 className="circleText">Home Supplies</h3>
            {/* </div> */}
          </div>
        </Link>

        <Link  onClick={() =>   window.scrollTo(0, 0)} to="/kitchensupplies" style={{textDecoration:"none",color:"black"}}>
          <div  className="divv">
            {" "}
            <div className="circle">
              <SoupKitchenSharpIcon className="icons" />
            </div>
            <h3 className="circleText">Kitchen Supplies</h3>
            {/* </div> */}
          </div>
        </Link>

        <Link  onClick={() =>   window.scrollTo(0, 0)} to="/indoor&outdoorsupplies" style={{textDecoration:"none",color:"black"}}>
          <div  className="divv">
            <div className="circle">
              <DoorFrontSharpIcon className="icons" />
            </div>
            <h3 className="circleText">Indoor & Outdoor Supplies</h3>
            {/* </div> */}
          </div>
        </Link>

        <Link   onClick={() =>   window.scrollTo(0, 0)} to="/petsupplies" style={{textDecoration:"none",color:"black"}}>
          <div  className="divv">
            {" "}
            <div className="circle">
              <PetsSharpIcon className="icons" />
            </div>
            <h3 className="circleText">Pet Supplies</h3>
            {/* </div> */}
          </div>
        </Link>
        </Carousel>
      </div>
    // </div>
  );
}

export default Special;
