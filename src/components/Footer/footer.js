import React, { useEffect } from "react";
import "./index.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import Aos from "aos";
import "aos/dist/aos.css";
import Etrolly from "../../content/images/etr.png";
import { Link } from "react-router-dom";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footerHead">
      <div className="Footer">
        <div className="FooterMenu">
          <div className="menuChild">
            <p className="headTitle">The Name You Trust</p>
            <p className="childTitle"> Reliability || Quality</p>
          </div>

          <div className="menuChild">
            <p className="headTitle">Quick Links</p>

            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="FootAnchor"
              to="/about"
            >
              About Us
            </Link>
            {/* <Link
              onClick={() => window.scrollTo(0, 0)}
              className="FootAnchor"
              to="/store"
            >
              Visit Store
            </Link> */}
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="FootAnchor"
              to="/contact"
            >
              Let's Connect
            </Link>
          </div>
        </div>
        <div className="social">
          <div>
            <FacebookIcon
              style={{
                color: "#3b5998",
              }}
              className="Footericons"
            />
            <InstagramIcon
              style={{
                borderRadius: "3px",
                color: "white",
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                //  color: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
              }}
              className="Footericons"
            />
            <YouTubeIcon
              style={{
                color: "#FF0000",
              }}
              className="Footericons"
            />
          </div>
        </div>

        <Divider />
        <div style={{ margin: "auto" }} className="menuChild">
          {/* <h2 style={{
                    color:"#116466"
                }}>Etrolly</h2> */}
          {/* <img src={Etrolly} alt="etrolly" height={100} width={100} /> */}
        </div>
        <div style={{ marginBottom: "55px" }} className="FooterMenu">
          <p className="childTitle highlight">
            {" "}
            ©2023{" "}
            <p style={{ fontWeight: "600", marginLeft: "5px" }}> Etrolly </p>
          </p>
          <div className="footerMenuInside">
            <img src={Etrolly} alt="etrolly" height={100} width={100} />
            <p className="childTitle highlight">powered by the </p>

            <p
              style={{
                fontWeight: "600",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
            >
              {" "}
              Etrolly{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
