import React, { useState, useEffect } from "react";
import { LeftSide, RightSide } from "../Components";
import { useBtnContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import { content } from "../Data/data";
import axios from "axios";
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
  // const [logistics, setLogistics] = useState([]);
  const [animateLeft, setAnimateLeft] = useState();
  const [animateRight, setAnimateRight] = useState();
  const [activePage, setActivePage] = useState();
  const navigate = useNavigate();
  const {
    store,
    setCommonProductCategories,
    commonProductCategories,
    setLogisticProviders,
    logisticsProviders,
    setPreferredBillingPlans,
  } = useBtnContext();

  const loadContent = () => {
    if (nextValue > 0 && nextValue < 6) {
      setAnimateLeft("animate__slideOutLeft");
      setAnimateRight("animate__slideOutUp");
      setTimeout(() => {
        setNextValue((prevValue) => prevValue + 1);
        setAnimateLeft("animate__slideInLeft");
        setAnimateRight("animate__slideInUp");
      }, 400);
    } else {
      //Route to last page
      navigate("/SlotBooking");
      setNextValue(1);
    }
  };

  //http://localhost:3000/?store=devreturnsadmin.myshopify.com

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/onboarding?store=${store}`
        );
        console.log(response.status);
        if (response?.status === 200) {
          console.log("yes");
          localStorage.setItem("Store", response?.data?.store);
          setCommonProductCategories(response?.data?.common_product_categories);
          setLogisticProviders(response?.data?.logistic_providers);
          setPreferredBillingPlans(response?.data?.preferred_billing_plans);

          // localStorage.setItem(
          //   "CommonProductCategories",
          //   response?.data?.common_product_categories
          // );
          // localStorage.setItem(
          //   "LogisticProviders",
          //   response?.data?.logistic_providers
          // );
          // localStorage.setItem(
          //   "PreferredBillingPlans",
          //   response?.data?.preferred_billing_plans
          // );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
          // setCategory(item.category),
          // setLogistics(item.logisticsDropDown),
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
        CheckBoxText={commonProductCategories}
        Logistics={logisticsProviders}
        LoadContent={loadContent}
        RightSideAnimation={animateRight}
        ActivePage={activePage}
        LastPage={5}
        YesActionText={yesActionText}
      />
    </div>
  );
};
