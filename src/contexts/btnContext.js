import { createContext, useContext, useState } from "react";

export const BtnContext = createContext();

export const BtnProvider = ({ children }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [commonProductCategories, setCommonProductCategories] = useState([]);
  const [logisticProviders, setLogisticProviders] = useState([]);
  const [preferredBillingPlans, setPreferredBillingPlans] = useState([]);
  const [category, setCategory] = useState([]);
  const [logistics, setLogistics] = useState([]);
  const [isExchange, setIsExchange] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const store = queryParams.get("store");
  return (
    <BtnContext.Provider
      value={{
        isBtnDisabled,
        setIsBtnDisabled,
        category,
        setCategory,
        store,
        logistics,
        setLogistics,
        isExchange,
        setIsExchange,
        commonProductCategories,
        setCommonProductCategories,
        logisticProviders,
        setLogisticProviders,
        preferredBillingPlans,
        setPreferredBillingPlans,
      }}
    >
      {children}
    </BtnContext.Provider>
  );
};
export const useBtnContext = () => {
  return useContext(BtnContext);
};
