import React from "react";
import "./ItemList.css";
import Item from "./Item"

let ItemList = (props) => (
  <div>
    {
      props.data.map((item, index) => (
        <Item key={item.heading + index} data={item} index={index}/>
      ))
    }
  </div>
)

export default ItemList;
