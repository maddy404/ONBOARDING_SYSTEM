import React, { useEffect } from "react";
import { useBtnContext } from "../../contexts";
export const Category = ({ CheckBoxText }) => {
  const { setIsBtnDisabled, setCategory, category, commonProductCategories } =
    useBtnContext();
  const categoryHandler = (e, item) => {
    if (item && e.target.checked) {
      setCategory((prev) => {
        return [...prev, item];
      });
    } else {
      const distinctCategory = category.filter((category) => category !== item);
      setCategory(distinctCategory);
    }
  };

  useEffect(() => {
    if (category?.length === 0) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [category, setIsBtnDisabled]);

  return (
    <div className="checkbox__wrapper">
      {commonProductCategories?.map((item, index) => {
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
