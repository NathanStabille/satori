"use client";
import { bodyData } from "@/data/bodyData";
import { footerData } from "@/data/footerData";
import { headerData } from "@/data/headerData";
import { createContext, ReactNode, useContext, useState } from "react";

interface ITranslateProviderProps {
  children: ReactNode;
}
interface ITranslateAreaContextType {
  headerAreaValue: string;
  setHeaderAreaValue: (value: string) => void;
  bodyAreaValue: string;
  setBodyAreaValue: (value: string) => void;
  footerAreaValue: string;
  setFooterAreaValue: (value: string) => void;
}
const TranslateAreaContext = createContext<ITranslateAreaContextType>({
  headerAreaValue: "",
  setHeaderAreaValue: () => {},
  bodyAreaValue: "",
  setBodyAreaValue: () => {},
  footerAreaValue: "",
  setFooterAreaValue: () => {},
});

export const TranslateAreaProvider = ({
  children,
}: ITranslateProviderProps) => {
  const [headerAreaValue, setHeaderAreaValue] = useState(headerData.pt);
  const [bodyAreaValue, setBodyAreaValue] = useState(bodyData.deafult);
  const [footerAreaValue, setFooterAreaValue] = useState(footerData.playpix.player.pt);

  return (
    <TranslateAreaContext.Provider
      value={{
        headerAreaValue,
        setHeaderAreaValue,
        bodyAreaValue,
        setBodyAreaValue,
        footerAreaValue,
        setFooterAreaValue,
      }}
    >
      {children}
    </TranslateAreaContext.Provider>
  );
};
export const useTranslateArea = () => useContext(TranslateAreaContext);
