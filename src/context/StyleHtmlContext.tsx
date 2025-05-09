"use client";

import { styleHtmlData } from "@/data/styleHtmlData";
import { createContext, ReactNode, useContext, useState } from "react";

interface IStyleHtmlProviderProps {
  children: ReactNode;
}

interface IstyleHtmlData {
  bg_color: string;
  fontFamily: string;
  fontGoogleLink: string;
}

interface IStyleHtmlContextType {
  styleHtml: IstyleHtmlData;
  setStyleHtml: (styleHtml: IstyleHtmlData) => void;
}

const StyleHtmlContext = createContext<IStyleHtmlContextType>({
  styleHtml: { bg_color: "", fontFamily: "", fontGoogleLink: "" },
  setStyleHtml: () => {},
});

export const StyleHtmlProvider = ({ children }: IStyleHtmlProviderProps) => {
  const [styleHtml, setStyleHtml] = useState(styleHtmlData.zynex);

  return (
    <StyleHtmlContext.Provider value={{ styleHtml, setStyleHtml }}>
      {children}
    </StyleHtmlContext.Provider>
  );
};

export const useStyleHtml = () => useContext(StyleHtmlContext);
