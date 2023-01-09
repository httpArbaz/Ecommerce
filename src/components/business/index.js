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
        If you have a business, then we are here to make sure that it thrives!
        Etrolly will help you build a strong retail connection around the globe.
        To achieve it, we start by showcasing your product to the right people,
        at the right time. This will not only benefit you in business dealing
        but will also allow you to save enough time to invest in other fruitful
        activities.
      </p>

      <div className="businessBox">
        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes"></div>

          <div className="BoxesInside">
            {/* <div className="businessIconCircle">
              <TrendingUpSharpIcon className="icon" />
            </div> */}
            <h3>
            Generate a better revenue by 25% in Q4.
            </h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes2"></div>

          <div className="BoxesInside">
            {/* <div className="businessIconCircle">
              <MonetizationOnSharpIcon  className="icon" />
            </div> */}
            <h3>
            Get a better market share experience with cost effectiveness.
            </h3>
          </div>
        </box>

        <box className="BoxHead">
          <div data-aos="fade-right" className="Boxes3"></div>

          <div className="BoxesInside">
            {/* <div className="businessIconCircle">
              <ThumbUpAltSharpIcon className="icon" />
            </div> */}
            <h3>
            Analyse your new competitors with our top-notch technology.
            </h3>
          </div>
        </box>
      </div>
    </div>
  );
}

export default Business;
