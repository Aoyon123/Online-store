import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, stock } = props.product;
  return (
    <div>
      <img src={img} alt="" />
      <h>{name}</h>
    </div>
  );
};

export default Product;
