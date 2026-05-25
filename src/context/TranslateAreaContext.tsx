"use client";
import { bodyData } from "@/data/bodyData";

import { createContext, ReactNode, useContext, useState } from "react";

interface ITranslateProviderProps {
  children: ReactNode;
}
interface ITranslateAreaContextType {
  bodyAreaValue: string;
  setBodyAreaValue: (value: string) => void;
}
const TranslateAreaContext = createContext<ITranslateAreaContextType>({
  bodyAreaValue: "",
  setBodyAreaValue: () => {},
});

export const TranslateAreaProvider = ({
  children,
}: ITranslateProviderProps) => {
  const [bodyAreaValue, setBodyAreaValue] = useState(bodyData.deafult);

  return (
    <TranslateAreaContext.Provider
      value={{
        bodyAreaValue,
        setBodyAreaValue,
      }}
    >
      {children}
    </TranslateAreaContext.Provider>
  );
};
export const useTranslateArea = () => useContext(TranslateAreaContext);
