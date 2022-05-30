import React, { Component } from 'react';

class CountryName extends Component {
    
    render() { 
        return (
            <h2>{`${this.props.name}, ${this.props.country}`}</h2>
        );
    }
}
 
export default CountryName;