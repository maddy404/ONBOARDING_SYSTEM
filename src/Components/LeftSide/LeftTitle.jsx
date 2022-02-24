import React from "react";

export const LeftTitle = ({ TitleText, animation }) => {
  return (
    <h1 className={`title animate__animated ${animation}`}>{TitleText}</h1>
  );
};
