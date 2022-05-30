import React, { Component } from 'react';

class Icon extends Component {
     
    render() { 
        return (
           
                
            <img
              className="icon"
              src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt={this.props.description}
            />
            
        );
    }
}
 
export default Icon;