import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";



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
            {/* <div className="businessIconCircle">
              <TrendingUpSharpIcon className="icon" />
            </div> */}
            <h3>Grow your revenue by 25% in Q4 Grow your revenue by 25% in Q4 Grow your revenue b</h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes2"></div>

          <div className="BoxesInside">
            {/* <div className="businessIconCircle">
              <MonetizationOnSharpIcon  className="icon" />
            </div> */}
            <h3>Grow your revenue by 25% in Q4 Grow your revenue by 25% in Q4 Grow your revenue b</h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes3"></div>

          <div className="BoxesInside">
            {/* <div className="businessIconCircle">
              <ThumbUpAltSharpIcon className="icon" />
            </div> */}
            <h3>GGrow your revenue by 25% in Q4 Grow your revenue by 25% in Q4 Grow</h3>
          </div>
        </box>
      </div>
    </div>
  );
}

export default Business;
