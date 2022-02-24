import React, { useState, useEffect } from "react";
import { useBtnContext } from "../../contexts";
import axios from "axios";
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
  const {
    isBtnDisabled,
    setIsBtnDisabled,
    category,
    logistics,
    isExchange,
    setIsExchange,
    logisticProviders,
  } = useBtnContext();
  const yesNoHandler = (choice) => {
    if (choice === "yes") {
      if (ActivePage === 2) {
        setIsExchange(true);
      }
      setYesNextActionToggle(true);
      setIsBtnDisabled(true);
    } else {
      if (ActivePage === 2) {
        setIsExchange(false);
      }
      setYesNextActionToggle(false);
      setIsBtnDisabled(false);
    }
  };

  const saveData = async () => {
    const store = localStorage.getItem("Store");
    if (ActivePage === 2) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/onboarding/?store=${store}&param=exchange&accept_exchanges=${isExchange}`
        );
        console.log(response);
      } catch (error) {
        setIsBtnDisabled(true);
        console.log(error);
      }
    } else if (ActivePage === 3) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/onboarding/?store=${store}&param=product-categories`,
          {
            active_product_categories: category,
          }
        );
      } catch (error) {
        console.log(error);
        setIsBtnDisabled(true);
      }
    } else if (ActivePage === 4) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/onboarding/?store=${store}&param=logistic-providers`,
          {
            logistic_providers: logistics,
          }
        );
      } catch (error) {
        setIsBtnDisabled(true);
        console.log(error);
      }
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
                {CheckBoxText?.length > 1 && ActivePage === 3 && (
                  <Category CheckBoxText={CheckBoxText} />
                )}
                <RightInnerDesc InnerDesc={InnerDesc} />
                {logisticProviders?.length > 0 && ActivePage === 4 && (
                  <SearchDropDown Logistics={logisticProviders} />
                )}
              </div>
              <Button
                name="Continue"
                className=""
                onClick={() => {
                  LoadContent();
                  saveData();
                }}
                isBtnDisabled={isBtnDisabled}
              />
            </div>
          </section>
        </div>
        {ActivePage > 0 && ActivePage <= 5 && (
          <TimerAndPageNo ActivePage={ActivePage} LastPage={LastPage} />
        )}
      </div>
    </div>
  );
};
