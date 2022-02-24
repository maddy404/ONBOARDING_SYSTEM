import React, { useEffect, useState } from "react";

export const TimerAndPageNo = ({ ActivePage, LastPage }) => {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const startTime = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    // setHour(h);
    // setMin(m);
    // setSec(s);
    let t = setTimeout(function () {
      startTime();
    }, 500);
  };

  useEffect(() => {
    (() => {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
      let t = setTimeout(function () {
        startTime();
      }, 500);
    })();
  }, []);
  return (
    <div className="bottom__panel">
      <div className="bottom__content">
        <span className="time" id="time">
          00:12:58
        </span>
        <div className="page__info">
          <span className="curent__page">{ActivePage}</span>/
          <span className="max__page">{LastPage}</span>
        </div>
      </div>
    </div>
  );
};
