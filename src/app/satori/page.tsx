"use client";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { TranslateArea } from "@/components/TranslateArea";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { Options } from "@/types/optionsType";
import { useState } from "react";

const styleOptions: Options = [
  {
    id: "playpix",
  },
  { id: "dupoc" },
];

const footerOptions: Options = [
  {
    id: "player",
  },
  { id: "affiliate" },
];

export default function Satori() {
  const { headerAreaValue, setHeaderAreaValue } = useTranslateArea();
  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();
  const { footerAreaValue, setFooterAreaValue } = useTranslateArea();
  const [style, setStyle] = useState(styleOptions[0].id);
  const [footerPattern, setFooterPattern] = useState(footerOptions[0].id);

  return (
    <div className="grid h-full w-full grid-cols-2 items-center justify-center gap-5 overflow-auto bg-[#FFF] p-5">
      {/* CODE MIRROR CONTAINER */}
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
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONTNAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-3">
        {/* MAIN BAR */}
        <div className="flex h-[100px] w-full items-center justify-between rounded-2xl bg-[#e8e9ed] px-5">
          <h1 className="font-skyer text-4xl text-[#A1A1A1]">satori</h1>

          <OptionSwitch
            options={styleOptions}
            option={style}
            setOption={setStyle}
          />
          <ThemeSwitch />
        </div>
        {/* MAIN BAR */}

        {/* URL INPUT */}
        <div className=" relative flex w-full items-center justify-center rounded-xl bg-[#e8e9ed]">
          <input
            type="url"
            className="h-full flex-1 bg-transparent p-3 pr-36 rounded-xl font-baiJamjuree text-lg font-medium text-[#AFAFAF] focus:outline focus:outline-2 focus:outline-purple-500"
          />
          <h1 className=" absolute right-1 rounded-lg mx-2 border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">
            {"url image </>"}
          </h1>
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}
        <div className="flex h-full w-full flex-col items-end justify-start rounded-2xl bg-[#e8e9ed] p-3">
          <h1 className="mb-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">
            {"Preview </>"}
          </h1>
          <HtmlPreview />
        </div>
        {/* HTML PREVIEW */}

        {/* FOOTER */}
        <div className="flex w-full items-center justify-between rounded-2xl bg-[#e8e9ed] p-5 transition-all">
          <h1 className="font-skyer text-xl font-medium text-[#AFAFAF]">
            Footer
          </h1>

          <SocialMediaLinks name={"X"} />
          <SocialMediaLinks name={"Instagram"} />
          <SocialMediaLinks name={"Site"} />
          {style === "dupoc" && <SocialMediaLinks name={"Threads"} />}

          <OptionSwitch
            options={footerOptions}
            option={footerPattern}
            setOption={setFooterPattern}
          />
        </div>
        {/* FOOTER */}

        <button className="w-full rounded-2xl bg-[#e8e9ed] py-5 font-skyer text-3xl text-[#AFAFAF] transition-all hover:bg-[#AFAFAF] hover:text-[#e8e9ed]">
          COPY CODE
        </button>
      </div>
      {/* HTML PREVIEW CONTNAINER */}
    </div>
  );
}
