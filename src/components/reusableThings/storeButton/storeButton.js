import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import {Link} from "react-router-dom";


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
      <Link
        style={{
          display: "flex",
          alignItems: "start",
        }}
        to="/store"
        onMouseEnter={handleClick}
        onClick={() => setActive(!active)} 
        className="anchor"
      >
        Store <ArrowDropDownIcon   />
      </Link>

      {active === true ? (
        <div onMouseLeave={handleClose} className="menuHover">
          <Link to="/category" onClick={handleClose} className="anchorIn ">
            {" "}
            Home and Kitchen
          </Link>
          <Link to="/category" className="anchorIn ">
            Sports
          </Link>
          <Link to="/category" className="anchorIn ">
            {" "}
            Out Door
          </Link>
          <Link to="/category" className="anchorIn ">
            Pet Supplies
          </Link>
          <Link to="/category" className="anchorIn ">
            {" "}
            Arts and Crafts
          </Link>
          <Link to="/category" className="anchorIn ">
            Garden and Outdoor
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default StoreButton;
