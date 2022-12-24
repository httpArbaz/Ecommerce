import React from "react";
import "./index.css";
import Product1 from "../../content/images/product1.jpg";
import Product2 from "../../content/images/product2.jpg"
import { Rating } from "@mui/material";
import {Link} from "react-router-dom";

function Feature({Title}) {
  return (
    <div className="Feature">
      <h2 className="FeatureTitle">{Title}</h2>
      <div className="FeatureContainer">



      <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
      <div className="FeatureBox">
          <img alt="Etrolly" src={Product1} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Ideal for
              Dog Cat Pets Home Use, Super Long Handle Upright Stand Up Broom
              and Dustpan Set (Gray&Orange)
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>

        </Link>



       
       
       <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
        <div className="FeatureBox">
          <img alt="Etrolly" src={Product2} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Ideal for
              Dog Cat Pets Home Use, Super Long Handle Upright Stand Up Broom
              and Dustpan Set (Gray&Orange)
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>
        </Link>

        <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
        <div className="FeatureBox">
          <img alt="Etrolly" src={Product1} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Ideal for
              Dog Cat Pets Home Use, Super Long Handle Upright Stand Up Broom
              and Dustpan Set (Gray&Orange)
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>
        </Link>

      
        <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
        <div className="FeatureBox">
          <img alt="Etrolly" src={Product1} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, 
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>
        </Link>


        <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
        <div className="FeatureBox">
          <img alt="Etrolly" src={Product2} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Ideal for
              Dog Cat Pets Home Use, Super Long Handle Upright Stand Up Broom
              and Dustpan Set (Gray&Orange)
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>
        </Link>


        <Link style={{
        textDecoration:"none",
        cursor:"pointer",
        color:"black"
       }} to="/item">
        <div className="FeatureBox">
          <img alt="Etrolly" src={Product1} className="FeatureImg" />
          <div className="FeatureDetail">
            <p className="featureLabel">Home Supplies</p>
            <p className="featureDec">
              Broom and Dustpan Set, Self-Cleaning with Dustpan Teeth, Ideal for
              Dog Cat Pets Home Use,
            </p>
            <Rating name="read-only" value={4} readOnly />
            <p className="featurePrice">$21.00</p>
          </div>
        </div>
        </Link>






    


      </div>
    </div>
  );
}

export default Feature;
