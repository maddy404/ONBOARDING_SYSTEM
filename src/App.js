import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routing/routes";
const App = () => {
  useEffect(() => {
    const browserTab = document.querySelector("#browser__tab"),
      browserText = browserTab.textContent;

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        browserTab.innerHTML = "👋 Come back 😭";
      } else {
        browserTab.innerHTML = "Thanks 🤗";
        setTimeout(() => {
          browserTab.innerHTML = browserText;
        }, 1000);
      }
    });
  }, []);
  return (
    <div className="workspace">
      <Routes>
        {routes.map((route, key) => (
          <Route path={route.path} element={<route.component />} key={key} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
