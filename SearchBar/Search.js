import React from "react";
import "./search.css";

const SearchBar = () => {
    return ( 
        <div className="search-container">
            <div className="search-item1">
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;