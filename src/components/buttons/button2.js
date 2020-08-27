import React from "react";
import "./style.css";

function Button2(props) {
  return (
    <div className="button2">
      <button
        onClick={props.handleButtonClick2}
        type="button"
        className="btn btn-dark"
      >
        Sort Descending
      </button>
    </div>
  );
}

export default Button2;