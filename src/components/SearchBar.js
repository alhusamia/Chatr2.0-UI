import React from "react";

const SearchBar = ({ onChange }) => (
  <div className="form-group col-lg-6 col-12">
    <div className="input-group my-3">
      <input
        className="form-control"
        type="text"
        onChange={event => onChange(event.target.value)}
        placeholder="Search..."
      />
    </div>
  </div>
);

export default SearchBar;
