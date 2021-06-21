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
      case "All":
        setListedItems(elementsToDisplay())
        break;
      case "Produce":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Produce")));
        break;
      case "Dairy":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Dairy")));
        break;
      case "Dessert":
        setListedItems(elementsToDisplay(items.filter((itemObj) => itemObj.category === "Dessert")));
        break;
    }
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All" onClick={filterItems}>Filter by category</option>
          <option value="Produce" onClick={filterItems}>Produce</option>
          <option value="Dairy" onClick={filterItems}>Dairy</option>
          <option value="Dessert" onClick={filterItems}>Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
