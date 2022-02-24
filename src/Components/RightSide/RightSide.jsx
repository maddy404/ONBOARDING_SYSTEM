import React, { useState, useEffect } from "react";
import { useBtnContext } from "../../contexts";
import {
  RightTitle,
  RightInnerDesc,
  YesNo,
  YesActionNext,
  Category,
  SearchDropDown,
  Button,
  TimerAndPageNo,
} from "..";
export const RightSide = ({
  RightSideTitleText,
  InnerDesc,
  isShowYesNo,
  YesActionText,
  CheckBoxText,
  Logistics,
  LoadContent,
  RightSideAnimation,
  ActivePage,
  LastPage,
  radioChecked,
}) => {
  const [yesNextActionToggle, setYesNextActionToggle] = useState(false);
  const { isBtnDisabled, setIsBtnDisabled } = useBtnContext();
  const yesNoHandler = (choice) => {
    if (choice === "yes") {
      setYesNextActionToggle(true);
      setIsBtnDisabled(true);
    } else {
      setYesNextActionToggle(false);
      setIsBtnDisabled(false);
    }
  };

  useEffect(() => {
    if (ActivePage >= 1 && ActivePage <= 5) {
      setIsBtnDisabled(true);
      setYesNextActionToggle(false);
    }
  }, [ActivePage, setIsBtnDisabled]);
  return (
    <div className={`side`}>
      <div className="main">
        <div className={`right animate__animated ${RightSideAnimation}`}>
          <section className={`right__content show `}>
            <div className={`inner `}>
              <div className={`inner__box `}>
                <RightTitle TitleText={RightSideTitleText} />
                {isShowYesNo && RightSideTitleText.length === 1 && (
                  <YesNo
                    onClick={(e) => {
                      yesNoHandler(e.target.value);
                    }}
                    name={ActivePage === 1 ? "return" : "exchange"}
                    checked={radioChecked}
                  />
                )}
                {YesActionText && (
                  <YesActionNext
                    HeadingText={YesActionText}
                    isShow={yesNextActionToggle}
                    key={ActivePage === 1 ? "return" : "exchange"}
                  />
                )}
                {CheckBoxText.length > 1 && (
                  <Category CheckBoxText={CheckBoxText} />
                )}
                <RightInnerDesc InnerDesc={InnerDesc} />
                {Logistics.length > 0 && (
                  <SearchDropDown Logistics={Logistics} />
                )}
              </div>
              <Button
                name="Continue"
                className=""
                onClick={LoadContent}
                isBtnDisabled={isBtnDisabled}
              />
            </div>
          </section>
        </div>
        {ActivePage > 0 && (
          <TimerAndPageNo ActivePage={ActivePage} LastPage={LastPage} />
        )}
      </div>
    </div>
  );
};
