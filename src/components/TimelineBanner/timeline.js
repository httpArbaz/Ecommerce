import React,{useEffect} from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Banner">
      <div className="BannerTitle">
        <h2 data-aos="fade-right" className="title">
          Our team of specialists can help improve your profit margins
          measurably, without compromising on your cost.
        </h2>
      </div>
    </div>
  );
}

export default Timeline;
