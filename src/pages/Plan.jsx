import React, { useState } from "react";
import { FullPageLoader } from "../Components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Plan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const planHandler = async (planType) => {
    const store = localStorage.getItem("Store");
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/onboarding/?store=${store}&param=plan&preferred_plan=${planType}`
      );
      if (response.status === 200) {
        setIsLoading(false);
        navigate("/SlotBooking");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <div className="billing  overflow-yes">
          <svg className="billing__bg-L  icon__bg">
            <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
          </svg>
          <svg className="billing__bg-R icon__bg">
            <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
          </svg>
          <img
            src="assets/images/logo-black.webp"
            alt="logo"
            className="logo"
          />
          <h2 className="billing__title">Billing information</h2>
          <p className="billing__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt dui scelerisque quis ut ornare risus.
          </p>
          <div className="billing__inner">
            <div className="billing__card">
              <div className="billing__card-content">
                <h3 className="billing__name">Free</h3>
                <div className="billing__rate">
                  <span className="billing__currency">$</span>
                  <span className="billing__price">0</span>
                  <span className="billing__mark">/</span>
                  <span className="billing__date">month</span>
                </div>
                <ul className="billing__list">
                  <li className="billing__item">
                    Analytics:{" "}
                    <span className="condition__analytics"> 2 Months </span>{" "}
                  </li>
                  <li className="billing__item">Branded Return workflow</li>
                  <li className="billing__item">
                    Return Picture collection:{" "}
                    <span className="condition__pic-collection"> 1 </span>
                  </li>
                  <li className="billing__item">
                    Consumer notifications:{" "}
                    <span className="condition__notification">Email</span>{" "}
                  </li>
                  <li className="billing__item">
                    Incentive Rules: <span className="condition__rules">1</span>{" "}
                  </li>
                  <li className="billing__item">
                    Exchange:{" "}
                    <span className="condition__exchange">
                      {" "}
                      Similar products
                    </span>
                  </li>
                  <li className="billing__item">
                    Number of Returns:{" "}
                    <span className="condition__return-number">Unlimited</span>{" "}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="billing__btn"
                value="free"
                onClick={(e) => {
                  planHandler(e.target.value);
                }}
              >
                Choose plan
              </button>
            </div>
            <div className="billing__card">
              <div className="billing__card-content">
                <h3 className="billing__name">Advanced</h3>
                <div className="billing__rate">
                  <span className="billing__currency">$</span>
                  <span className="billing__price">19</span>
                  <span className="billing__mark">/</span>
                  <span className="billing__date">month</span>
                </div>
                <ul className="billing__list">
                  <li className="billing__item">
                    Analytics:{" "}
                    <span className="condition__analytics"> 2 Months </span>{" "}
                  </li>
                  <li className="billing__item">Branded Return workflow</li>
                  <li className="billing__item">
                    Return Picture collection:{" "}
                    <span className="condition__pic-collection"> 1 </span>
                  </li>
                  <li className="billing__item">
                    Consumer notifications:{" "}
                    <span className="condition__notification">Email</span>{" "}
                  </li>
                  <li className="billing__item">
                    Incentive Rules: <span className="condition__rules">1</span>{" "}
                  </li>
                  <li className="billing__item">
                    Exchange:{" "}
                    <span className="condition__exchange">
                      {" "}
                      Similar products
                    </span>
                  </li>
                  <li className="billing__item">
                    Number of Returns:{" "}
                    <span className="condition__return-number">Unlimited</span>{" "}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="billing__btn"
                value="advanced"
                onClick={(e) => {
                  planHandler(e.target.value);
                }}
              >
                Choose plan
              </button>
            </div>
            <div className="billing__card">
              <div className="billing__card-content">
                <h3 className="billing__name">Custom</h3>
                <div className="billing__rate">
                  <span className="billing__currency">$</span>
                  <span className="billing__price">0</span>
                  <span className="billing__mark">/</span>
                  <span className="billing__date">month</span>
                </div>
                <ul className="billing__list">
                  <li className="billing__item">
                    Analytics:{" "}
                    <span className="condition__analytics"> 2 Months </span>{" "}
                  </li>
                  <li className="billing__item">Branded Return workflow</li>
                  <li className="billing__item">
                    Return Picture collection:{" "}
                    <span className="condition__pic-collection"> 1 </span>
                  </li>
                  <li className="billing__item">
                    Consumer notifications:{" "}
                    <span className="condition__notification">Email</span>{" "}
                  </li>
                  <li className="billing__item">
                    Incentive Rules: <span className="condition__rules">1</span>{" "}
                  </li>
                  <li className="billing__item">
                    Exchange:{" "}
                    <span className="condition__exchange">
                      {" "}
                      Similar products
                    </span>
                  </li>
                  <li className="billing__item">
                    Number of Returns:{" "}
                    <span className="condition__return-number">Unlimited</span>{" "}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                value="custom"
                className="billing__btn"
                onClick={(e) => {
                  planHandler(e.target.value);
                }}
              >
                Choose plan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
