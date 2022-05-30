import React, { Component } from 'react';

class TempRange extends Component {
    
    render() { 
        return (
            <p>
                     H:{Math.round(this.props.high - 270.15)}
            <span>&#176;</span> L:
            {Math.round(this.props.low - 270.15)}
            <span>&#176;</span>
            </p>
        );
    }
}
 
export default TempRange;