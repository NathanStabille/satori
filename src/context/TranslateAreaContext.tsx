"use client";
import { bodyData } from "@/data/bodyData";

import { createContext, ReactNode, useContext, useState } from "react";

interface ITranslateProviderProps {
  children: ReactNode;
}
interface ITranslateAreaContextType {
  bodyAreaValue: string;
  setBodyAreaValue: (value: string) => void;
  resetBodyAreaValue: () => void;
}
const TranslateAreaContext = createContext<ITranslateAreaContextType>({
  bodyAreaValue: "",
  setBodyAreaValue: () => {},
  resetBodyAreaValue: () => {},
});

export const TranslateAreaProvider = ({
  children,
}: ITranslateProviderProps) => {
  const [bodyAreaValue, setBodyAreaValue] = useState(bodyData.default);

  return (
    <TranslateAreaContext.Provider
      value={{
        bodyAreaValue,
        setBodyAreaValue,
        resetBodyAreaValue: () => setBodyAreaValue(bodyData.default),
      }}
    >
      {children}
    </TranslateAreaContext.Provider>
  );
};
export const useTranslateArea = () => useContext(TranslateAreaContext);
