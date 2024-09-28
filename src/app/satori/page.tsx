"use client";
import { FooterSwitch } from "@/components/FooterSwitch";
import { HtmlPreview } from "@/components/HtmlPreview";
import { MainBar } from "@/components/MainBar";
import { TranslateArea } from "@/components/TranslateArea";
import { useTranslateArea } from "@/context/TranslateAreaContext";

export default function Satori() {
  const { headerAreaValue, setHeaderAreaValue } = useTranslateArea();
  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();
  const { footerAreaValue, setFooterAreaValue } = useTranslateArea();

  return (
    <div className="grid h-full w-full grid-cols-2 items-center justify-center gap-5 overflow-auto bg-[#FFF] p-5">
      {/* CODE MIRRO CONTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-5">
        <TranslateArea
          typeArea={"header"}
          value={headerAreaValue}
          setValue={setHeaderAreaValue}
        />
        <TranslateArea
          typeArea={"body"}
          value={bodyAreaValue}
          setValue={setBodyAreaValue}
        />
        <TranslateArea
          typeArea={"footer"}
          value={footerAreaValue}
          setValue={setFooterAreaValue}
        />
      </div>

      {/* HTML PREVIEW CONTNAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-3">
        <MainBar />
        <div className="flex h-full w-full flex-col items-start justify-start rounded-2xl bg-[#e8e9ed] p-3">
          <h1 className="mb-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">
            {" "}
            {"Preview </>"}{" "}
          </h1>
          <HtmlPreview />
        </div>
        <div className="flex w-full items-center justify-between rounded-2xl bg-[#e8e9ed] p-5">
          <h1 className="font-skyer text-3xl text-[#AFAFAF] font-medium">Footer</h1>
          
          <FooterSwitch />
        </div>
        <button className="w-full rounded-2xl bg-[#e8e9ed] py-5 font-skyer text-3xl text-[#AFAFAF] transition-all hover:bg-[#AFAFAF] hover:text-[#e8e9ed]">
          COPY CODE
        </button>
      </div>
    </div>
  );
}
