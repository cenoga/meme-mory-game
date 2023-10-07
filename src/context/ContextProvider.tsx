import { createContext, useContext, useState } from "react";

const StateContext = createContext<any | null>(null);

export const ContextProvider = ({ children }: any) => {
  const [allActive, setAllActive] = useState(false);

  return (
    <StateContext.Provider value={{ allActive, setAllActive }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
