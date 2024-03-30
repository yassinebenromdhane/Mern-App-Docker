import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
const CustomInputField = (props) => {
  return (
    <div>
      <MDBInput
        //wrapperClass="mb-4"
        label={props.label}
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
      <div className="input-validation">
        {props.errors ? <div>{props.errors}</div> : null}
      </div>
    </div>
  );
};

export default CustomInputField;
