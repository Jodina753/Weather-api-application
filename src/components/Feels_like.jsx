import React, { Component } from "react";

class FeelsLike extends Component {
  render() {
    return (
      <div className="feels-like">
        <p>Feels like: {Math.round(this.props.feelsLike - 270.15)}{" "}
        <span>&deg;C</span></p>
      </div>
    );
  }
}

export default FeelsLike;
