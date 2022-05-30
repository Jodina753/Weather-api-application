import React, { Component } from 'react';

class Input extends Component {
    
    render() { 
        return (
       
            <input
              className="search-bar"
              type="text"
              placeholder="Enter City..."
              onInput={this.props.onInput}
              weather={this.props.weather}
              onKeyDown={this.props.onKeyDown}
              value={this.props.value}
            ></input>

            

            );
    }
}
 
export default Input;