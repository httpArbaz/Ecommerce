
import React,{useEffect} from "react";
import "./hero.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Hero">
      <div className="heroContent">
        <div className="HeroTypoCont">
          <h3 className="heroTitle" data-aos="fade-right">Most efficient ecommerce platform</h3>
          <h2 className="HeroHead" data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </h2>
          <button data-aos="fade-right" className="heroButton">Shop Now</button>
        </div> 
      </div>
    </div>
  );
}

export default Hero;