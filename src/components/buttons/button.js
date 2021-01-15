import React from "react";

// Button component for ascending and descending sort
function Button(props) {
  return (
    <div className="button">
      <button
        onClick={props.handleButtonClick}
        type="button"
        className={props.class}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
