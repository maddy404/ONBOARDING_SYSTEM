import React from "react";
import "./button.css";
export const Button = ({ onClick, isBtnDisabled }) => {
  return (
    <button
      type="button"
      className={`btn__continue ${isBtnDisabled ? "btn_disabled" : ""}`}
      onClick={onClick}
      disabled={isBtnDisabled}
    >
      Continue
      <svg className="icon__arrow">
        <use xlinkHref="assets/svg/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  );
};
