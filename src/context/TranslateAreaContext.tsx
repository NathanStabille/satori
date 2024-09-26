import { createContext, ReactNode, useContext, useState } from 'react'

interface ITranslateProviderProps {
  children: ReactNode
}

const TranslateAreaContext = createContext({ translateAreaValue: '', setTranslateAreValue: (translateAreaValue: string) => { } });

export const TranslateAreaProvider = ({ children }: ITranslateProviderProps) => {


  const [translateAreaValue, setTranslateAreValue] = useState('hello world')


  return (
    <TranslateAreaContext.Provider value={{ translateAreaValue, setTranslateAreValue }}>
      {children}
    </TranslateAreaContext.Provider>
  )

}
export const useTranslateArea = () => useContext(TranslateAreaContext)

