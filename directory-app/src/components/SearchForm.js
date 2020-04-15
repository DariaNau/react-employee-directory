import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default Search;
