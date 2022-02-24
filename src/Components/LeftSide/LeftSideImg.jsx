import React from "react";

export const LeftSideImg = ({ SrcA, SrcB, animation }) => {
  console.log(animation);
  return (
    <div>
      <img
        src={`assets/images/${SrcA}`}
        alt="dashboard"
        className={`dashboard dashboard-1 animate__animated ${animation} ${
          animation && "dashboard-1-animate"
        }`}
      />
      <img
        src={`assets/images/${SrcB}`}
        alt="dashboard"
        className={`dashboard dashboard-2 animate__animated ${animation} ${
          animation && "dashboard-2-animate"
        }`}
      />
    </div>
  );
};
