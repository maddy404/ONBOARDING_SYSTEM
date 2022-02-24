import React, { useState, useRef } from "react";
import { useBtnContext } from "../../contexts";

export const YesActionNext = ({ HeadingText, isShow, key }) => {
  const [plusMinusDays, setPlusMinusDays] = useState(0);
  const { setIsBtnDisabled } = useBtnContext();
  const dayRef = useRef();
  const plusMinusDaysHandler = () => {
    if (parseInt(dayRef?.current.value) > 0) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
    setPlusMinusDays(dayRef.current.value);
  };

  const clearDefaultValue = (e) => {
    e.target.value = "";
  };
  return (
    <div
      className={`${isShow ? "show visible" : "answer"}`}
      style={{ paddingTop: "40px" }}
    >
      <h2 className="inner__title">{HeadingText}</h2>
      <div className="number">
        <input
          ref={dayRef}
          type="text"
          className="number__input"
          defaultValue="0"
          maxLength="3"
          key={key}
          onFocus={(e) => {
            clearDefaultValue(e);
          }}
          onChange={plusMinusDaysHandler}
        />
        <span className="window__day">
          {plusMinusDays > 9 ? "Days" : "Day"}
        </span>
      </div>
    </div>
  );
};
