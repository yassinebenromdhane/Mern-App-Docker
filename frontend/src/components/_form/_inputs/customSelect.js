import React from "react";

const CustomSelect = (props) => {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option defaultChecked>{props.defaultOption}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="input-validation">
        {props.errors ? <div>{props.errors}</div> : null}
      </div>
    </>
  );
};

export default CustomSelect;
