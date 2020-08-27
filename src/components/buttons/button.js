import React from "react";
import "./style.css";

function Button1(props) {
  return (
    <div className="button">
      <button
        onClick={props.handleButtonClick}
        type="button"
        className="btn btn-light"
      >
        Sort Ascending
      </button>
    </div>
  );
}

export default Button1;
