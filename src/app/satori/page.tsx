"use client";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { HeaderTranslate } from "@/components/HeaderTranslate";
import { FooterTranslate } from "@/components/FooterTranslate";
import { TagInfo } from "@/components/TagInfo";

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

  return (
    <div
      className={`grid h-full w-full grid-cols-2 items-center justify-center gap-5 overflow-auto bg-[url('/images/bg-light.webp')] bg-cover bg-no-repeat p-5 dark:bg-[url('/images/bg-dark.webp')]`}
    >
      {/* CODE MIRROR CONTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-5">
        <HeaderTranslate />
        <FooterTranslate pattern={footerPattern} stylePattern={selectStyle} />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-3">
        {/* MAIN BAR */}
        <div className="flex h-[100px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-transparent px-5 shadow-lg backdrop-blur-lg">
          <h1 className="font-skyer text-4xl text-[#8079FB]">satori</h1>

          <OptionSwitch
            options={styleOptions}
            option={selectStyle}
            setOption={setSelectStyle}
          />
          <ThemeSwitch />
        </div>
        {/* MAIN BAR */}

        {/* URL INPUT */}
        <div className="relative flex w-full items-center justify-center rounded-xl border border-slate-200 bg-transparent shadow-lg backdrop-blur-lg">
          <input
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            type="url"
            className="h-full flex-1 rounded-xl bg-transparent p-3 pr-36 font-baiJamjuree text-lg font-medium text-[#8079FB] focus:outline-1 focus:outline-[#8079FB]"
          />
          <TagInfo name="url image" className="absolute right-1 mx-2" />
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}
        <div className="flex h-full w-full flex-col items-end justify-start rounded-2xl border border-slate-200 bg-transparent p-3 shadow-lg backdrop-blur-lg">
          <TagInfo name="preview" className="mb-2" />

          <HtmlPreview urlImage={urlImage} selectStyle={selectStyle} />
        </div>
        {/* HTML PREVIEW */}

        {/* FOOTER */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-transparent p-5 shadow-md backdrop-blur-lg transition-all">
          <h1 className="font-skyer text-xl font-bold text-slate-50">Footer</h1>

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

        <button className="w-full rounded-2xl border-none bg-[#8079FB] py-5 font-skyer text-3xl text-slate-50 outline-none transition-all hover:bg-indigo-500 hover:text-slate-50 active:bg-indigo-700">
          COPY CODE
        </button>
      </div>
      {/* HTML PREVIEW CONNTAINER */}
    </div>
  );
}
