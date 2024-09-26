'use client'
import { TranslateArea } from "@/components/TranslateArea";
import { useTranslateArea } from "@/context/TranslateAreaContext";

export default function Satori() {


  const { headerAreaValue, setHeaderAreaValue } = useTranslateArea()
  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea()
  const { footerAreaValue, setFooterAreaValue } = useTranslateArea()

  return (
    <div className="h-screen w-screen p-5 bg-[#F5F5F5] flex justify-center items-center flex-col gap-5">
      <TranslateArea typeArea={'header'} value={headerAreaValue} setValue={setHeaderAreaValue} />
      <TranslateArea typeArea={'body'} value={bodyAreaValue} setValue={setBodyAreaValue} />
      <TranslateArea typeArea={'footer'} value={footerAreaValue} setValue={setFooterAreaValue} />
    </div>
  )
}