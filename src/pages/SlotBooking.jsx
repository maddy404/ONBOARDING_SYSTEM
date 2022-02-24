import React from "react";

export const SlotBooking = () => {
  return (
    <div className="finaly slide-down animate__animated animate__slideInUp ">
      <svg className="finaly__bg-L icon__bg">
        <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
      </svg>
      <svg className="finaly__bg-R icon__bg">
        <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
      </svg>
      <img src="assets/images/logo-black.webp" alt="logo" className="logo" />
      <h2 className="finaly__title">
        We are preparing your return portal based on your preferences required
      </h2>
      <p className="finaly__redirect">
        This page will automatically redirect in
        <span className="finaly__seconds timer" data-time="30">
          {" "}
        </span>{" "}
        seconds
      </p>
      <p className="finaly__desc">
        Meanwhile we strongly recommend you use our free concierge service
        Book&nbsp;Free onboarding Session. Clicking below will not disrupt your
        current flow
      </p>
      <form className="booking" method="get">
        <h3 className="booking__title">Time slots available as below</h3>
        <span className="booking__date"> January, 2022 </span>
        <div className="swiper bookingSwiper daySwiper">
          <div className="swiper-wrapper booking__wrapper booking__wrapper-day"></div>
          <div className="swiper-button-next booking__button-next">
            <svg className="swiper__btn-R">
              <use xlinkHref="assets/svg/sprite.svg#chevron-left"></use>
            </svg>
          </div>
          <div className="swiper-button-prev booking__button-prev">
            <svg className="swiper__btn-L">
              <use xlinkHref="assets/svg/sprite.svg#chevron-left"></use>
            </svg>
          </div>
        </div>
        <p className="curent-time">
          <svg className="curent-time__icon">
            <use xlinkHref="assets/svg/sprite.svg#globe"></use>
          </svg>
          <span className="curent-time__country">India </span>
          standard time
          <span className="curent-time__data"> (2:39am) </span>
        </p>
        <div className="swiper bookingSwiper">
          <div className="swiper-wrapper booking__wrapper">
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">10:00 </span>
                  <span className="booking__time-day">am</span>
                </span>
              </label>
            </div>
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">11:00 </span>
                  <span className="booking__time-day">am</span>
                </span>
              </label>
            </div>
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">09:00 </span>
                  <span className="booking__time-day">am</span>
                </span>
              </label>
            </div>
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">05:00 </span>
                  <span className="booking__time-day">pm</span>
                </span>
              </label>
            </div>
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">04:00 </span>
                  <span className="booking__time-day">am</span>
                </span>
              </label>
            </div>
            <div className="swiper-slide booking__slide">
              <label>
                <input
                  type="radio"
                  className="swiper__radio"
                  name="swiper__radio"
                />
                <span className="booking__box">
                  <span className="booking__time">07:00 </span>
                  <span className="booking__time-day">am</span>
                </span>
              </label>
            </div>
          </div>
          <div className="swiper-button-next booking__button-next">
            <svg className="swiper__btn-R">
              <use xlinkHref="assets/svg/sprite.svg#chevron-left"></use>
            </svg>
          </div>
          <div className="swiper-button-prev booking__button-prev">
            <svg className="swiper__btn-L">
              <use xlinkHref="assets/svg/sprite.svg#chevron-left"></use>
            </svg>
          </div>
        </div>
        <div className="booking__send">
          <div className="booking__email">
            <span className="booking__email-text"> Your email </span>
            <input
              type="email"
              className="booking__email-input"
              placeholder="example@gmail.com"
            />
          </div>
          <button
            type="submit"
            className="booking__send-btn"
            data-text="thank you"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};
