import React, { useEffect } from "react";
import "./hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Hero">
      <div className="heroContent">
        <div className="HeroTypoCont">
          <h3 className="heroTitle" data-aos="fade-right">
            Most efficient ecommerce platform
          </h3>
          <h2 className="HeroHead" data-aos="fade-right">
            Etrolly is a trusted e-commerce platform that helps you to grow and
            build better connections with a diverse community of buyers and
            sellers every day.
          </h2>
          {/* <Link to={"/store"}>
            <button data-aos="fade-right" className="themeButton">
              Shop Now
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
