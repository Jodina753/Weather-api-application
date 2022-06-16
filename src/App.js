import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";
import "./App.css";
import Weather from "./components/Weather";
import Input from "./components/Input";
import Search from "./components/Search";
import Loading from "./components/Loading";
import GeoBtn from "./components/Geo_Button";

class App extends Component {
  state = {
    latitude: "",
    longitude: "",
    userInput: "",
    weatherData: undefined,
  };

  schema = {
    userInput: Joi.string().required().min(1).max(85).label("user input"),
  };

  getInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState({ weatherData: undefined });
    }
  };

  geoLocation = () => {
    navigator.geolocation.getCurrentPosition((displayPosition) => {
      this.setState({
        latitude: displayPosition.coords.latitude,
        longitude: displayPosition.coords.longitude,
      });
    });
  };

  getWeather = async () => {
    let url;

    if (this.state.userInput) {
      let getLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${this.state.userInput}&limit=1&appid=9245cd47bf011ca7512ccd892236e833`;
      const latLonResponse = await axios.get(getLatLon);

      url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLonResponse.data[0].lat}&lon=${latLonResponse.data[0].lon}&appid=9245cd47bf011ca7512ccd892236e833`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=9245cd47bf011ca7512ccd892236e833`;
    }

    const response = await axios.get(url);

    this.setState({ weatherData: response.data });
  };

  componentDidUpdate() {
    if (this.state.weatherData === undefined) this.getWeather();
  }

  componentDidMount() {
    this.geoLocation();
  }

  search = () => this.setState({ weatherData: undefined });

  locay = () => this.setState({ userInput: "", weatherData: undefined });

  render() {
    if (
      this.state.weatherData === undefined ||
      (this.state.weatherData && this.state.weatherData.weather.length === 0)
    ) {
      return <Loading />;
    }

    console.log(this.state.weatherData);
    return (
      <>
        {/* <div className="main-container">
          <div className="search-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Enter City..."
            ></input>
            <button id="search-btn">
              <FaSearch />
            </button>
          </div>

           <div className="weather-container">
            <div className="weather-info">
              <h2 className="city">London, United Kingdom</h2>
              <h1 className="temp">
                15<span>&deg;C</span>
              </h1>

              <div className="icon-description">
                <img
                  className="icon"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                />
                <div className="description">Partly Cloudy</div>
              </div>

              <div className="feels-like">
                Feels like: 12 <span>&deg;C</span>
              </div>
              <div className="wind-speed">Wind speed: 5.8 km/h</div>
            </div>
          </div> */}

        <div></div>
        <div className="main-container">
          <div className="search-container">
            <Input
              onInput={this.getInput}
              weather={this.state.weatherData}
              onKeyDown={this.onKeyDown}
              value={this.state.userInput}
            />
            <Search search={this.search} />
            <div />
          </div>

          <GeoBtn locay={this.locay} />

          <div className="weather-container">
            <div className="weather-info">
              <Weather weatherData={this.state.weatherData} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
