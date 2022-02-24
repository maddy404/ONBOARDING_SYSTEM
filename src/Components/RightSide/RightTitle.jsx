import React, { useState, useEffect } from "react";
import { useBtnContext } from "../../contexts";
import { YesNo } from "..";

export const RightTitle = ({ TitleText }) => {
  const [showMultipleTitle, setShowMultipleTitle] = useState();
  const [countYesNo, setCountYesNo] = useState(0);
  const { setIsBtnDisabled } = useBtnContext();
  const [selectedIndex, setSelectedIndex] = useState([]);
  useEffect(() => {
    setShowMultipleTitle(TitleText);
  }, [TitleText]);

  const countYesNoHandler = (index) => {
    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    setSelectedIndex((prev) => [...prev, index]);

    const uniqueIndex = selectedIndex?.filter(distinct);

    if (uniqueIndex.length === 3) {
      setSelectedIndex(uniqueIndex);
    }
  };

  useEffect(() => {
    if (showMultipleTitle?.length > 1) {
      if (selectedIndex?.length >= 3) {
        setIsBtnDisabled(false);
      } else {
        setIsBtnDisabled(true);
      }
    }
  }, [countYesNo, showMultipleTitle, setIsBtnDisabled, selectedIndex]);
  return (
    <>
      {showMultipleTitle?.length > 1 ? (
        <>
          {showMultipleTitle?.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="inner__title" style={{ fontSize: "22px" }}>
                  {item}
                </h2>
                <YesNo
                  name={`multiple_question${index}`}
                  key={index}
                  onClick={() => {
                    countYesNoHandler(index);
                  }}
                />
              </div>
            );
          })}
        </>
      ) : (
        <h2 className="inner__title">{TitleText}</h2>
      )}
    </>
  );
};
