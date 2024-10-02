"use client";
import { bodyData } from "@/data/bodyData";
import { footerAdvisor, footerMainData } from "@/data/footerData";
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
  footerAdv: string;
  setFooterAdv: (value: string) => void;
}
const TranslateAreaContext = createContext<ITranslateAreaContextType>({
  headerAreaValue: "",
  setHeaderAreaValue: () => {},
  bodyAreaValue: "",
  setBodyAreaValue: () => {},
  footerAreaValue: "",
  setFooterAreaValue: () => {},
  footerAdv: "",
  setFooterAdv: () => {},
});

export const TranslateAreaProvider = ({
  children,
}: ITranslateProviderProps) => {
  const [headerAreaValue, setHeaderAreaValue] = useState(headerData.pt);
  const [bodyAreaValue, setBodyAreaValue] = useState(bodyData.deafult);
  const [footerAreaValue, setFooterAreaValue] = useState(
    footerMainData.playpix.player.pt,
  );
  const [footerAdv, setFooterAdv] = useState(footerAdvisor.pt);

  return (
    <TranslateAreaContext.Provider
      value={{
        headerAreaValue,
        setHeaderAreaValue,
        bodyAreaValue,
        setBodyAreaValue,
        footerAreaValue,
        setFooterAreaValue,
        footerAdv,
        setFooterAdv,
      }}
    >
      {children}
    </TranslateAreaContext.Provider>
  );
};
export const useTranslateArea = () => useContext(TranslateAreaContext);
