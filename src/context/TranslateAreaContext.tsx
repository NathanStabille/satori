'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

interface ITranslateProviderProps {
  children: ReactNode,
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
  headerAreaValue: '',
  setHeaderAreaValue: () => { },
  bodyAreaValue: '',
  setBodyAreaValue: () => { },
  footerAreaValue: '',
  setFooterAreaValue: () => { },

})

export const TranslateAreaProvider = ({ children }: ITranslateProviderProps) => {


  const [headerAreaValue, setHeaderAreaValue] = useState('hello header')
  const [bodyAreaValue, setBodyAreaValue] = useState('hello body')
  const [footerAreaValue, setFooterAreaValue] = useState('hello footer')


  return (
    <TranslateAreaContext.Provider value={{
      headerAreaValue, setHeaderAreaValue,
      bodyAreaValue, setBodyAreaValue,
      footerAreaValue, setFooterAreaValue
    }}>
      {children}
    </TranslateAreaContext.Provider>
  )

}
export const useTranslateArea = () => useContext(TranslateAreaContext)

