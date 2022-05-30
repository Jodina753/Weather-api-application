import React, { Component } from "react";

class ShowTemp extends Component {
  render() {
    return (
      <h1 className="temp">
        {Math.round(this.props.showTemp - 270.15)}
        <span>&#176;</span>
      </h1>
    );
  }
}

export default ShowTemp;
