import React from "react";
import "./index.css";
import { Rating } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { data } from "../../static/products.static";
import { useSelector, useDispatch } from "react-redux";
import {
 
  selectCount,
  updateCart 
} from "../../features/counter/counterSlice";

function ItemDetail() {
  const {value } = useSelector(selectCount);
  const dispatch = useDispatch();

  const { slug } = useParams();
  console.log(slug, "param");
  const matchItem = data.find((product) => {
    return product.productName.replace(/\s/g, "") === slug;
  });


const active = value.includes(matchItem)

console.log(active,"buttonstate")

  
// console.log(itemActive,"itemactive")
  const handleClick = () =>{

    
    dispatch(updateCart(matchItem))
    
  }



  return (
    <div className="itemDetail">
      {/* product Detail // row */}
      <div className="itemRow">
        <div className="itemImgBox">
          <img alt="etrolly" src={matchItem.img} />
        </div>
        <div className="itemDetailBox">
          <h4>
            {matchItem.category} <Divider />
          </h4>
          <h2 className="itemDes">{matchItem.productName}</h2>
          <div className="rev">
            <Rating name="read-only" value={5} readOnly />
            {/* <p>5 customer reviews</p> */}
          </div>
          <h2>{matchItem.price}$</h2>
          <p>{matchItem.productDescription}</p>

          <button onClick={active=== true ? null : handleClick} className="heroButtonItem">{active === true ? "Item Added" : "Add To Cart"}</button>
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
        <h3> Detail Description </h3>
        <ul>
          <li className="li">
            Attractive modern finish, sleek seamless design.
          </li>
          <li className="li">Easy to use and comfortable to work with.</li>
          <li className="li">
            Ultra-durable, strong, and dishwasher safe. Wont dent, crack, rust,
            or chip.
          </li>
          <li className="li">
            A hole in the handle allows for convenient hanging. Constructed from
            heavy-duty one-piece stainless steel with no welding or stress
            points.
          </li>
          <li className="li">
            Attractive modern finish, sleek seamless design.
          </li>
          <li className="li">
            A hole in the handle allows for convenient hanging. Constructed from
            heavy-duty one-piece stainless steel with no welding or stress
            points.
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
