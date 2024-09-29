"use client";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { HeaderTranslate } from "@/components/HeaderTranslate";
import { FooterTranslate } from "@/components/FooterTranslate";

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

  const [selectStyle, setSelectStyle] = useState(styleOptions[0].id);
  const [footerPattern, setFooterPattern] = useState(footerOptions[0].id);
  const [urlImage, setUrlImage] = useState(
    "https://crmcontent.betconstruct.com/24092616491379102187501150023061900000000000000089176.png",
  );



    console.log(selectStyle)

  return (
    <div className="grid h-full w-full grid-cols-2 items-center justify-center gap-5 overflow-auto bg-[#FFF] p-5">
      {/* CODE MIRROR CONTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-5">

        <HeaderTranslate />
        <FooterTranslate pattern={footerPattern} stylePattern={selectStyle} />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-3">
        {/* MAIN BAR */}
        <div className="flex h-[100px] w-full items-center justify-between rounded-2xl bg-[#e8e9ed] px-5">
          <h1 className="font-skyer text-4xl text-[#A1A1A1]">satori</h1>

          <OptionSwitch
            options={styleOptions}
            option={selectStyle}
            setOption={setSelectStyle}
          />
          <ThemeSwitch />
        </div>
        {/* MAIN BAR */}

        {/* URL INPUT */}
        <div className="relative flex w-full items-center justify-center rounded-xl bg-[#e8e9ed]">
          <input
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            type="url"
            className="h-full flex-1 rounded-xl bg-transparent p-3 pr-36 font-baiJamjuree text-lg font-medium text-[#AFAFAF] focus:outline focus:outline-2 focus:outline-purple-500"
          />
          <h1 className="absolute right-1 mx-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">
            {"url image </>"}
          </h1>
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}
        <div className="flex h-full w-full flex-col items-end justify-start rounded-2xl bg-[#e8e9ed] p-3">
          <h1 className="mb-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">
            {"Preview </>"}
          </h1>
          <HtmlPreview urlImage={urlImage} />
        </div>
        {/* HTML PREVIEW */}

        {/* FOOTER */}
        <div className="flex w-full items-center justify-between rounded-2xl bg-[#e8e9ed] p-5 transition-all">
          <h1 className="font-skyer text-xl font-medium text-[#AFAFAF]">
            Footer
          </h1>

          <SocialMediaLinks name={"X(Twitter)"} />
          <SocialMediaLinks name={"Instagram"} />
          <SocialMediaLinks name={"Site"} />
          {selectStyle === "dupoc" && <SocialMediaLinks name={"Threads"} />}

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
      {/* HTML PREVIEW CONNTAINER */}
    </div>
  );
}
