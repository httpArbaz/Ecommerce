import React from "react";
import "./navbar.css";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "./ham.js";

import StoreButton from "../reusableThings/storeButton/storeButton";
function Navbar() {
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <>
      {" "}
      {matches ? (
        <Hamburger />
      ) : (
        <div className="Navbar">
          <h2 style={{
            color:"#116466"
          }}>Etrolly</h2>
          <div className="RightNavigations">
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
