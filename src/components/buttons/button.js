import React from "react";
import "./style.css";

function Button1(props) {
  return (
    <div>
      <button
        onClick={props.handleButtonClick}
        type="button"
        className="button btn btn-light"
      >
        Sort Ascending
      </button>
    </div>
  );
}

export default Button1;
