import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroAbout() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div >
      <div className="AboutHero">
        <h1 data-aos="fade-top" className="AboutTitle">
        About Etrolly
        </h1>
      </div>

      <div 
       className="AboutBottom">
        <div className="title1">
          <h2>Being in the industry for almost a decade now, we take pride in being one the most reliable e-commerce platforms.</h2>
        </div>
        <div className="title2">
          <p>
          We deal in a variety of items including indoor and outdoor supply ranges, pet supplies, home appliances, and much more.</p>
<p>
Our goal is to help you fulfil your everyday needs with our high-quality products and services. Etrolly is here to make your life easier by saving you time and money that you would otherwise spend on running back and forth to the markets.
          </p>
          {/* <h3>-Brandon Mora, Chairman</h3>
          <h3>-Alex Perez, CEOn</h3> */}
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
