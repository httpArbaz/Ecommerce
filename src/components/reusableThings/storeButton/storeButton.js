import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";

function StoreButton() {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {

    setActive(true);
  };

  const handleClose = () => {

    setActive(false);
  };


  console.log(active)
 
  return (
    <div >
      <a
        style={{
          display: "flex",
          alignItems: "start",
        }}
        href="#Categories"
        onMouseEnter={handleClick}
        onClick={() => setActive(!active)} 
        className="anchor"
      >
        Store <ArrowDropDownIcon   />
      </a>

      {active === true ? (
        <div onMouseLeave={handleClose} className="menuHover">
          <a href="/" onClick={handleClose} className="anchorIn ">
            {" "}
            Home and Kitchen
          </a>
          <a href="/" className="anchorIn ">
            Sports
          </a>
          <a href="/" className="anchorIn ">
            {" "}
            Out Door
          </a>
          <a href="/" className="anchorIn ">
            Pet Supplies
          </a>
          <a href="/" className="anchorIn ">
            {" "}
            Arts and Crafts
          </a>
          <a href="/" className="anchorIn ">
            Garden and Outdoor
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default StoreButton;
