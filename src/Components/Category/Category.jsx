import React from "react";
import { useBtnContext } from "../../contexts";
export const Category = ({ CheckBoxText }) => {
  const { setIsBtnDisabled } = useBtnContext();
  const categoryHandler = (e, item) => {
    if (item && e.target.checked) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
    console.log(e.target.checked);
  };
  return (
    <div className="checkbox__wrapper">
      {CheckBoxText.map((item, index) => {
        return (
          <label className="checkbox__label" key={index}>
            <input
              type="checkbox"
              className="checkbox__input"
              onChange={(e) => {
                categoryHandler(e, item);
              }}
            />
            <span className="checkbox__span">
              <svg className="checkbox__icon">
                <use xlinkHref="assets/svg/sprite.svg#choose"></use>
              </svg>
            </span>
            <span className="checkbox__text">{item}</span>
          </label>
        );
      })}
    </div>
  );
};
