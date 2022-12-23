import React,{useEffect} from "react";
import "./navbar.css";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "./ham.js";
import Aos from "aos";
import "aos/dist/aos.css";
import StoreButton from "../reusableThings/storeButton/storeButton";

function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {" "}
      {matches ? (
        <Hamburger />
      ) : (
        <div className="Navbar">
          <h2
            style={{
              color: "#116466",
            }}
            data-aos="fade-right"
          >
            Etrolly
          </h2>
          <div data-aos="fade-left" className="RightNavigations">
            <a href="/" className="anchor">
              Home
            </a>

            <StoreButton />
            <a href="/" className="anchor">
              About Us
            </a>
            <a href="/" className="anchor">
              Contact Us
            </a>
            <AddShoppingCartSharpIcon
              className="anchor"
              style={{ color: "#f35f5f" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
