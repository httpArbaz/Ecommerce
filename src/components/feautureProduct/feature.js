import React, { useState,useEffect } from "react";
import "./index.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../../static/products.static";
import { useParams } from "react-router-dom";

function Feature() {
  const { slug } = useParams();
  const [statecategory, setStataeCategory] = useState("");

  const singalCategory = data.filter((data) => {
    return data.category.replace(/\s/g, "").toLowerCase() === slug;
  });
  // setStataeCategory(singalCategory[0].category)
 useEffect(() => {
  if(singalCategory.length){

  setStataeCategory(singalCategory[0].category)
  }
 }, [slug,singalCategory])
 


  return (
    <div className="Feature">
      <h2 className="FeatureTitle">{statecategory}</h2>
      <div className="FeatureContainer">
        {
           singalCategory.length ? singalCategory.map((data) => {
           
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                  to={`/category/${data.productName.replace(/\s/g, "")}`}
                >
                  <div className="FeatureBox">
                    <img alt="Etrolly" src={data.img} className="FeatureImg" />
                    <div className="FeatureDetail">
                      <p className="featureLabel">{data.category}</p>
                      <p className="featureDec">{data.productDescription}</p>
                      <Rating name="read-only" value={4} readOnly />
                      <p className="featurePrice">{data.price}</p>
                    </div>
                  </div>
                </Link>
              );
            }):
            data.map((data) => {
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                  to={`/category/${data.productName.replace(/\s/g, "")}`}
                >
                  <div className="FeatureBox">
                    <img alt="Etrolly" src={data.img} className="FeatureImg" />
                    <div className="FeatureDetail">
                      <p className="featureLabel">{data.category}</p>
                      <p className="featureDec">{data.productDescription}</p>
                      <Rating name="read-only" value={4} readOnly />
                      <p className="featurePrice">{data.price}$</p>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Feature;
