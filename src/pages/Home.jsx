import React, { useState, useEffect } from "react";
import { LeftSide, RightSide } from "../Components";
import { useNavigate } from "react-router-dom";
import { content } from "../Data/data";
import "animate.css";
export const Home = () => {
  const [nextValue, setNextValue] = useState(1);
  const [leftHeading, setLeftHeading] = useState("");
  const [leftBottomImgA, setLeftBottomImgA] = useState("");
  const [leftBottomImgB, setLeftBottomImgB] = useState("");
  const [rightHeading, setRightHeading] = useState("");
  const [rightDescription, setRightDescription] = useState("");
  const [isYesNo, setIsYesNo] = useState(false);
  const [yesActionText, setYesActionText] = useState("");
  const [category, setCategory] = useState([]);
  const [logistics, setLogistics] = useState([]);
  const [animateLeft, setAnimateLeft] = useState();
  const [animateRight, setAnimateRight] = useState();
  const [activePage, setActivePage] = useState();
  const [radioChecked, setRadioChecked] = useState(false);
  const navigate = useNavigate();

  const loadContent = () => {
    if (nextValue > 0 && nextValue < 6) {
      setAnimateLeft("animate__slideOutLeft");
      setAnimateRight("animate__slideOutUp");
      setTimeout(() => {
        setNextValue((prevValue) => prevValue + 1);
        setAnimateLeft("animate__slideInLeft");
        setAnimateRight("animate__slideInUp");
      }, 400);

      // if (activePage === 3) {
      //   setRadioChecked(false);
      // }
    } else {
      //Route to last page
      navigate("/SlotBooking");
      setNextValue(1);
    }
  };

  useEffect(() => {
    (() => {
      content.data.slice(nextValue - 1, nextValue).map((item) => {
        return (
          setLeftHeading(item.leftHeading),
          setLeftBottomImgA(item.imgName[0]),
          setLeftBottomImgB(item.imgName[1]),
          setRightHeading(item.rightHeading),
          setRightDescription(item.rightDescription),
          setIsYesNo(item.isShowYesNo),
          setCategory(item.category),
          setLogistics(item.logisticsDropDown),
          setActivePage(item.pageNo),
          setYesActionText(item.YesActionNext)
        );
      });
    })();
  }, [nextValue]);

  useEffect(() => {});

  return (
    <div className="content">
      <LeftSide
        LeftSideTitleText={leftHeading}
        LeftSideImgSrcA={leftBottomImgA}
        LeftSideImgSrcB={leftBottomImgB}
        LeftSideAnimation={animateLeft}
      />
      <RightSide
        RightSideTitleText={rightHeading}
        InnerDesc={rightDescription}
        isShowYesNo={isYesNo}
        CheckBoxText={category}
        Logistics={logistics}
        LoadContent={loadContent}
        RightSideAnimation={animateRight}
        ActivePage={activePage}
        LastPage={5}
        YesActionText={yesActionText}
      />
    </div>
  );
};
