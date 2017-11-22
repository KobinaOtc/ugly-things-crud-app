import React from "react";
import "./Item.css";

let Item = (props) => (
  <div className="colorStyle">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={props.data.imgUrl}/>
        </div>

        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item persColor"><h1>{props.data.heading}</h1></li>
            <li className="list-group-item persColor">{props.data.description}</li>
            <li className="list-group-item persColor">  <button onClick={props.handleRemove} className="btn btn-dark">Remove</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Item;
