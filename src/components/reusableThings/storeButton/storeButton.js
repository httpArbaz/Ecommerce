import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import { Link } from "react-router-dom";

function StoreButton() {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  console.log(active);

  return (
    <div>
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
        Store <ArrowDropDownIcon />
      </Link>

      {active === true ? (
        <div onMouseLeave={handleClose} className="menuHover">
          <Link
            to="/kitchensupplies"
            onClick={handleClose}
            className="anchorIn "
          >
            {" "}
            Kitchen Supplies
          </Link>
          <Link to="/indoor&outdoorsupplies" className="anchorIn ">
            Indoor & Outdoor Supplies
          </Link>
          <Link to="/petsupplies" className="anchorIn ">
            Pet Supplies
          </Link>
          <Link to="/homesupplies" className="anchorIn ">
            Home Supplies
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default StoreButton;
