import React, { useEffect } from "react";
import "./navbar.css";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "./ham.js";
import Aos from "aos";
import "aos/dist/aos.css";
import StoreButton from "../reusableThings/storeButton/storeButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../../features/counter/counterSlice";
import Etrolly from "../../content/images/etr.png";

function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");
  const { value } = useSelector(selectCount);
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
          <Link to="/">
            <img alt="etrolly" height={80} width={100} src={Etrolly} />
          </Link>
          <div data-aos="fade-left" className="RightNavigations">
            <Link to="/" className="anchor">
              Home
            </Link>

            {/* <StoreButton /> */}
            <Link to="/about" className="anchor">
              About Us
            </Link>
            <Link to="/contact" className="anchor">
              Contact Us
            </Link>
            {/* <Link to="/cart">
            <AddShoppingCartSharpIcon
              className="anchor"
              style={{ color: "#ad449b",border:"2px solid",padding:"3px" }}
            />
            <p style={{position:"absolute",bottom:"11px",marginLeft:"3vh",color:"black",fontSize:"16px",fontWeight:"bolder"}}>{value.length}</p>
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
