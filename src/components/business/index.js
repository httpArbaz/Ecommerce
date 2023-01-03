import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";

import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';


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
        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes"></div>

          <div className="BoxesInside">
            <div className="businessIconCircle">
              <TrendingUpSharpIcon className="icon" />
            </div>
            <h3>Grow your revenue by 25% in Q4</h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes2"></div>

          <div className="BoxesInside">
            <div className="businessIconCircle">
              <MonetizationOnSharpIcon  className="icon" />
            </div>
            <h3>Grow your revenue by 25% in Q4</h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes3"></div>

          <div className="BoxesInside">
            <div className="businessIconCircle">
              <ThumbUpAltSharpIcon className="icon" />
            </div>
            <h3>Grow your revenue by 25% in Q4</h3>
          </div>
        </box>
      </div>
    </div>
  );
}

export default Business;
