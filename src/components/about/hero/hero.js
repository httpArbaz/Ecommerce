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
          <h2>We Work Hard To Provide You The Best Products</h2>
        </div>
        <div className="title2">
          <p>
            Here at The Etrolly, we strive to add to everyday life with
            high-quality products and services that exceed our customers’
            desires. We believe the best way to deliver a great user experience
            is by understanding what customers want and love while striving to
            expand our market leadership.
          </p>
          <h3>-Brandon Mora, Chairman</h3>
          <h3>-Alex Perez, CEOn</h3>
        </div>
      </div>
    </div>
  );
}

export default HeroAbout;
