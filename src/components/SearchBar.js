import React from "react";

const SearchBar = ({ onChange }) => (
  <div className="form-group">
    <div className="input-group my-3">
      <input
        className="form-control"
        type="text"
        onChange={event => onChange(event.target.value)}
        placeholder="Search for a Channel..."
      />
    </div>
  </div>
);

export default SearchBar;
