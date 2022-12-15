import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./index.css";

function StoreButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
 
  };

  console.log(anchorEl);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <a
        style={{
          display: "flex",
          alignItems: "start",
        }}
        href="#Categories"
        onMouseEnter={handleClick}
        className="anchor"
      >
        Store {anchorEl == null ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </a>
  
      <Popover
       onClick={handleClose}
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "space-evenly",
          }}
           onMouseLeave={handleClose}
        >
          <a href="/" onClick={handleClose} className="anchorIn">
            {" "}
            Home and Kitchen
          </a>
          <a href="/" className="anchorIn">
            Sports
          </a>
          <a href="/" className="anchorIn">
            {" "}
            Out Door
          </a>
          <a href="/" className="anchorIn">
            Pet Supplies
          </a>
          <a href="/" className="anchorIn">
            {" "}
            Arts and Crafts
          </a>
          <a href="/" className="anchorIn">
            Garden and Outdoor
          </a>
        </div>
      </Popover>
    </>
  );
}

export default StoreButton;
