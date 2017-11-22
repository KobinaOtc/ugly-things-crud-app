import React from "react";
import Form from "./Form.js";
import {connect} from "react-redux";
import {addItem} from "../../actions";

class FormContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      heading: "",
      imgUrl: "",
      description: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state.heading, this.state.imgUrl, this.state.description);
    this.setState((prevState) => ({
      heading: "",
      imgUrl: "",
      description: ""
    }))
  }
  render() {
    return (
      <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    )
  }
}

export default connect(null, {addItem})(FormContainer)
