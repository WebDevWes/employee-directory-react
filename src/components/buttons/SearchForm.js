import React from "react";

// Input with onchange to filter
function SearchForm(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={props.filterEmployees}>
            <input
              onChange={props.handleOnChange}
              className="form-control"
              type="text"
              placeholder="Search by name"
              value={props.filter}
              name="filter"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
