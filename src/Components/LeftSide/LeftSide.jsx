import React from "react";
import { LeftSideImg, LeftTitle } from "..";
export const LeftSide = ({
  LeftSideImgSrcA,
  LeftSideImgSrcB,
  LeftSideTitleText,
  LeftSideAnimation,
}) => {
  return (
    <div className="side">
      <div className="left">
        <div className="left__inner">
          <svg className="icon__bg-L icon__bg">
            <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
          </svg>
          <svg className="icon__bg-R icon__bg">
            <use xlinkHref="assets/svg/sprite.svg#big-logo"></use>
          </svg>
          <LeftSideImg
            SrcA={LeftSideImgSrcA}
            SrcB={LeftSideImgSrcB}
            animation={LeftSideAnimation}
          />
        </div>
        <div className={`left__content`}>
          <img src="assets/images/logo.webp" alt="logo" className="logo" />
          <LeftTitle
            TitleText={LeftSideTitleText}
            animation={LeftSideAnimation}
          />
        </div>
      </div>
    </div>
  );
};
