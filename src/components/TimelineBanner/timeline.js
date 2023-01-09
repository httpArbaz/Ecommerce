import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import TimelineImg from "../../content/images/team6.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

function Timeline() {
  const matches = useMediaQuery("(max-width:800px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Banner">
      <ParallaxProvider>
        <ParallaxBanner
          style={{
            height: "100%",
            borderRadius: matches === true ? "0rem" : "5rem",
          }}
          layers={[{ image: TimelineImg, speed: matches === true ? 15 : 20 }]}
        >
          <div className="BannerTitle">
            <h2 data-aos="fade-right" className="title">
              We have a team of professionals to help you get the best retailer
              deals by covering up your profit margins without adding up to the
              costs.
            </h2>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}

export default Timeline;
