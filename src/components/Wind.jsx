import React, { Component } from 'react';

class Wind extends Component {
    
    render() { 
        return (
            <div className="wind-speed">
                <p>Wind speed: {this.props.windSpeed}</p>
                
            </div>
            
        );
    }
}
 
export default Wind;