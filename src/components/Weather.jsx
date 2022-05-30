import React, { Component } from "react";
import CountryName from "./Country_name";
import ShowTemp from "./ShowTemp";
import Description from "./Description";
import FeelsLike from "./Feels_like";
import TempRange from "./Temp_Range";
import Wind from "./Wind";
import Icon from "./Icon";

class Weather extends Component {
  render() {
    return (
      <>
        <CountryName
          country={this.props.weatherData.sys.country}
          name={this.props.weatherData.name}
        />

        <ShowTemp showTemp={this.props.weatherData.main.temp} />

        <div className="icon-desc-container">
          <Icon icon={this.props.weatherData.weather[0].icon} />
          
          <Description
            description={this.props.weatherData.weather[0].description}
          />
        </div>

        <FeelsLike feelsLike={this.props.weatherData.main.feels_like} />

        <TempRange
          high={this.props.weatherData.main.temp_max}
          low={this.props.weatherData.main.temp_min}
        />

        <Wind windSpeed={this.props.weatherData.wind.speed} />
      </>
    );
  }
}

export default Weather;
