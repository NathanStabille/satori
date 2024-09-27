'use client'
import { HtmlPreview } from "@/components/HtmlPreview";
import { TranslateArea } from "@/components/TranslateArea";
import { useTranslateArea } from "@/context/TranslateAreaContext";

export default function Satori() {


  const { headerAreaValue, setHeaderAreaValue } = useTranslateArea()
  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea()
  const { footerAreaValue, setFooterAreaValue } = useTranslateArea()

  return (
    <div className="h-full w-full p-5 bg-[#FFF] grid grid-cols-2 justify-center items-center gap-5 overflow-auto">
      <div className="h-full w-full flex flex-col justify-start items-start gap-5">
        <TranslateArea typeArea={'header'} value={headerAreaValue} setValue={setHeaderAreaValue} />
        <TranslateArea typeArea={'body'} value={bodyAreaValue} setValue={setBodyAreaValue} />
        <TranslateArea typeArea={'footer'} value={footerAreaValue} setValue={setFooterAreaValue} />
      </div>
      <div className="h-full w-full flex flex-col justify-start items-start gap-3">
        <div className="h-full w-full p-3 bg-[#e8e9ed] rounded-3xl flex flex-col justify-start items-start">
          <h1 className=" border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] font-baiJamjuree text-[16px] py-1 px-2 mb-2 font-medium text-[#A1A1A1]"> {'Preview </>'} </h1>
          <HtmlPreview />
        </div>
        <button className="w-full py-2 bg-[#e8e9ed] rounded-2xl font-skyer text-[24px] text-[#AFAFAF] transition-all hover:bg-[#AFAFAF] hover:text-[#e8e9ed]">COPY CODE</button>
      </div>
    </div>
  )
}