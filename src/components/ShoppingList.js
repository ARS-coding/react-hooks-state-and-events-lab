import React from "react";
import {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  // let [selectedOption, setSelectedOption] = useState("All");
  let [listedItems, setListedItems] = useState(elementsToDisplay());

  function elementsToDisplay(array = items) { // takes an array of objects and passes them to the item component, returning an array that has the elements and is ready to put into the DOM 
    let result = [];
    array.map((obj) => result.push(<Item key={obj.id} name={obj.name} category={obj.category} />));
    return result;
  }

  function filterItems(event) { // click handler for options
    switch (event.target.value) {
      case "Produce":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Produce")));
        break;
      case "Dairy":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Dairy")));
        break;
      case "Dessert":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Dessert")));
        break;
      default:
        setListedItems(elementsToDisplay())
    }
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterItems}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
