import React, { Component } from 'react';
import { FaLocationArrow } from "react-icons/fa";

class GeoBtn extends Component {
    
    render() { 
        return (
            <div className='locay-container'>
                <button id="geo-btn" onClick={this.props.locay}><span>Find My Location!</span><FaLocationArrow /></button>
            </div>
        );
    }
}
 
export default GeoBtn;