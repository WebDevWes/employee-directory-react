import React from "react";
import "./style.css";

function Button2(props) {
  return (
    <div>
      <button
        onClick={props.handleButtonClick2}
        type="button"
        className="button2 btn btn-dark"
      >
        Sort Descending
      </button>
    </div>
  );
}

export default Button2;