import React, { Component } from "react";

class Description extends Component {
  render() {
    return <div className="description">
      <p>{this.props.description}</p>
      </div>;
  }
}

export default Description;
