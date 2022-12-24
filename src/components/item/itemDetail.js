import React from "react";
import "./index.css";
import Product1 from "../../content/images/product1.jpg";
import { Rating } from "@mui/material";
import Divider from "@mui/material/Divider";

function ItemDetail() {
  
  return (
    <div className="itemDetail">
      {/* product Detail // row */}
      <div className="itemRow">
        <div className="itemImgBox">
          <img alt="etrolly" src={Product1} />
        </div>
        <div className="itemDetailBox">
          <h4>KITCHEN SUPPLIES <Divider/></h4>
          <h2 className="itemDes">
            (Pack of 2) CORELLE® 12.25” Serving spoons – Secret Garden (Open
            Stock)
          </h2>
          <div className="rev">
            <Rating name="read-only" value={5} readOnly />
            {/* <p>5 customer reviews</p> */}
          </div>
          <h2>$15.00</h2>
          <ul>
            <li className="li">
              Attractive modern finish, sleek seamless design.
            </li>
            <li className="li">Easy to use and comfortable to work with</li>
            <li className="li">
              Ultra-durable, strong, and dishwasher safe. Wont dent, crack,
              rust, or chip
            </li>
            <li className="li">
              Will last a LIFETIME. Exceptional value and an excellent gift for
              your kitchen.
            </li>
            <li className="li">Won’t, bend, break or weaken</li>
          </ul>

          <button className="heroButtonItem">ADD TO CART</button>
          <Divider
            style={{
              marginTop: "10px",
              color: "black",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>

      {/*description and reviews columns  */}
      <div className="itemspecification">
        <h3> Detail Description  </h3>
          <ul>
            <li className="li">Attractive modern finish, sleek seamless design.</li>
            <li className="li">Easy to use and comfortable to work with.</li>
            <li className="li">
              Ultra-durable, strong, and dishwasher safe. Wont dent, crack,
              rust, or chip.
            </li>
            <li className="li">
              A hole in the handle allows for convenient hanging. Constructed
              from heavy-duty one-piece stainless steel with no welding or
              stress points.
            </li>
            <li className="li">Attractive modern finish, sleek seamless design.</li>
            <li className="li">
              A hole in the handle allows for convenient hanging. Constructed
              from heavy-duty one-piece stainless steel with no welding or
              stress points.
            </li>
            <li className="li">
              Will last a LIFETIME. Exceptional value and an excellent gift for
              your kitchen.
            </li>
          </ul>
      

        {/* <h3>description</h3> */}
      </div>
    </div>
  );
}

export default ItemDetail;
