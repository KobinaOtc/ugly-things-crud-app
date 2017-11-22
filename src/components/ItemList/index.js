import React from "react";
import ItemList from "./ItemList.js";
import {connect} from "react-redux";


class ItemListContainer extends React.Component{
  render() {
    return (
      <ItemList data={this.props.items}/>
    )
  }
}
export default connect((state) => state)(ItemListContainer);
