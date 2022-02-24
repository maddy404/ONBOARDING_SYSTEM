import React from "react";

export const YesNo = ({ onClick, key, name }) => {
  return (
    <div className="flex w-48 align-center ">
      <div className="radio__wrapper">
        <label className="radio__label">
          <input
            type="radio"
            className="radio__input"
            name={name}
            value="yes"
            onClick={onClick}
            key={name}
          />
          <span className="radio__icon"></span>
          <span className="radio__text">Yes</span>
        </label>
        <label className="radio__label">
          <input
            type="radio"
            className="radio__input"
            name={name}
            value="no"
            onClick={onClick}
            key={name}
          />
          <span className="radio__icon"></span>
          <span className="radio__text">No</span>
        </label>
      </div>
    </div>
  );
};
