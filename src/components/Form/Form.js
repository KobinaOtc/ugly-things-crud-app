import React from "react";
import "./Form.css";

let Form = (props) => (
  <div className="colorStyle size">
    <div className="container py-3">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} value={props.heading} name="heading" className="form-control" placeholder="Title"/>
            <input onChange={props.handleChange} value={props.imgUrl} name="imgUrl" className="form-control my-2" placeholder="Image Url"/>
            <input onChange={props.handleChange} value={props.description} name="description" className="form-control" placeholder="Description"/>
            <button type="submit" className="btn btn-light mt-2">Add Ugly</button>
        </form>
    </div>
  </div>
)

export default Form;
