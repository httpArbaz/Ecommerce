import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";

function Business() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Business">
      <h2 data-aos="fade-top" className="businessText">
        For Businesses
      </h2>
      <p data-aos="fade-top">
        Let us help you take your business to the next level by showing exactly
        when and where your products are needed, expanding your business reach
        and collaborating with you as a retail partner.
      </p>

      <div className="businessBox">
        <div data-aos="fade-right"  className="Boxes">
            <div className="BoxesInside">
          <div className="businessIconCircle">
            <TrendingUpSharpIcon className="icon" />

          </div>
          <h3>Grow your revenue by 25% in Q4</h3>
        </div>
        </div>
        <div data-aos="fade-top" className="Boxes">
            
         <div className="BoxesInside">
          <div className="businessIconCircle">
            <CurrencyExchangeSharpIcon className="icon" />
   
          </div>

          <h3>Expand your market share while enjoying cost efficiencie</h3>
        </div>
        </div>

        <div data-aos="fade-left" className="Boxes">
         <div className="BoxesInside">
          <div className="businessIconCircle">
            <ThumbUpAltSharpIcon className="icon" />
          </div>
          <h3>Utilize top notch technologies to gain competitive advantage</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
