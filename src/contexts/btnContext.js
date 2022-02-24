import { createContext, useContext, useState } from "react";

export const BtnContext = createContext();

export const BtnProvider = ({ children }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  return (
    <BtnContext.Provider
      value={{
        isBtnDisabled,
        setIsBtnDisabled,
      }}
    >
      {children}
    </BtnContext.Provider>
  );
};
export const useBtnContext = () => {
  return useContext(BtnContext);
};
