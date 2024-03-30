import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
const CustomButton = (props) => {
  return (
    <div>
      <MDBBtn
        className={props.className}
        size={props.size}
        type={props.type}
        disabled={!props.isEnabled}
        color={props.isEnabled ? "primary" : "secondary"}
      >
        {props.isEnabled ? (
          props.buttonText
        ) : (
          <div className="spinner-border spinner-border-sm" role="status"></div>
        )}
      </MDBBtn>
    </div>
  );
};

export default CustomButton;
