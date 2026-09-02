"use client";
import { bodyData } from "@/data/bodyData";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  startTransition,
  useState,
} from "react";

const STORAGE_KEY = "satori-html-content";

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
  const [hasLoadedSavedContent, setHasLoadedSavedContent] = useState(false);

  useEffect(() => {
    const savedContent = window.localStorage.getItem(STORAGE_KEY);

    startTransition(() => {
      if (savedContent !== null) {
        setBodyAreaValue(savedContent);
      }

      setHasLoadedSavedContent(true);
    });
  }, []);

  useEffect(() => {
    if (hasLoadedSavedContent) {
      window.localStorage.setItem(STORAGE_KEY, bodyAreaValue);
    }
  }, [bodyAreaValue, hasLoadedSavedContent]);

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
