import React from "react";
import {useState} from "react";

function Item({ name, category }) {

  let [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setIsAddedToCart(!isAddedToCart)}>Add to Cart</button>
    </li>
  );
}

export default Item;
