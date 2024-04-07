import React, { Component } from "react";

class SearchBar extends Component {
  render() {
     const { getSearchData,handleKeyPress} = this.props;
    return (
      <div className="  search-container">
        <div className="search-input">
          <input
           // onChange={this.handleChange}
            
            id="searchField"
            className="search-field"
            onKeyPress={handleKeyPress}
          />
          <button onClick={getSearchData} className="search-button"><i className="fas fa-search"></i></button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
