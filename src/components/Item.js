import React from "react";

function Item({ name, category }) {

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={(e) => {
        e.target.parentElement.classList.toggle("in-cart")
      }}>Add to Cart</button>
    </li>
  );
}

export default Item;
