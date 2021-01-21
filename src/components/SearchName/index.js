import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchName(props) {
  console.log(props)
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Directory</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in an employees name."
          id="employee"
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee.name} key={employee.id.value} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchName;
