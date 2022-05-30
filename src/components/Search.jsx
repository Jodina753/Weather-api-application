import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";

class Search extends Component {
     
    render() { 
        return (
            <button id="search-btn" onClick={this.props.search}>
              <FaSearch />
            </button>
        );
    }
}
 
export default Search;