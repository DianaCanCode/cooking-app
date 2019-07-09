import React from "react";
import "./Search.css";

//Search bar: 
const Search = props => {
  return (
    <div className="container"> 
        <div method="GET">
            <label> </label>
            <input id="app" className="search"
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </div>
    </div>
  );
};

export default Search;
