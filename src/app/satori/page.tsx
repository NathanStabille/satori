"use client";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { HeaderTranslate } from "@/components/HeaderTranslate";
import { FooterTranslate } from "@/components/FooterTranslate";
import { TagInfo } from "@/components/TagInfo";
import { BodyTranslate } from "@/components/BodyTranslate";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

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

const linksOptions: Options = [
  { id: "x" },
  { id: "instagram" },
  { id: "site" },
  { id: "threads" },
];

export default function Satori() {
  const [selectStyle, setSelectStyle] = useState(styleOptions[0].id);
  const [footerPattern, setFooterPattern] = useState(footerOptions[0].id);
  const [urlImage, setUrlImage] = useState(
    "https://crmcontent.betconstruct.com/24092616491379102187501150023061900000000000000089176.png",
  );
  const [copyHtml, setCopyHtml] = useState("");
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    x: true,
    instagram: true,
    site: true,
    threads: true,
  });

  const { wasCopied, handleCopy } = useCopyToClipboard(copyHtml);

  const handleCheck = (name: string, isChecked: boolean) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: isChecked,
    }));
  };


  return (
    <div
      className={`grid h-full w-full grid-cols-2 items-center justify-center gap-5 overflow-auto bg-[url('/images/bg-light.webp')] bg-cover bg-no-repeat p-5 max-md:grid-cols-1 dark:bg-[url('/images/bg-dark.webp')]`}
    >
      {/* CODE MIRROR CONTAINER */}
      <div className="grid h-full w-full grid-cols-1 flex-col items-start justify-start gap-4">
        <HeaderTranslate />
        <BodyTranslate />
        <FooterTranslate pattern={footerPattern} stylePattern={selectStyle} />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-full flex-col items-start justify-start gap-3">
        {/* MAIN BAR */}
        <div className="flex h-[100px] w-full items-center justify-between rounded-2xl border-2 bg-slate-100 p-5 shadow-lg backdrop-blur-lg dark:border-none dark:bg-[#1e1e1e88]">
          <h1 className="select-none font-skyer text-4xl text-[#8079FB] dark:text-slate-50">
            satori
          </h1>

          <OptionSwitch
            options={styleOptions}
            option={selectStyle}
            setOption={setSelectStyle}
          />
          <ThemeSwitcher />
        </div>
        {/* MAIN BAR */}

        {/* URL INPUT */}
        <div className="relative flex w-full items-center justify-center rounded-xl bg-slate-100 shadow-lg backdrop-blur-lg dark:bg-[#1e1e1e88]">
          <input
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            type="url"
            className="h-full flex-1 rounded-xl bg-transparent p-3 pr-36 font-baiJamjuree text-lg font-medium text-[#8079FB] focus:outline focus:outline-[#8079FB] dark:text-[#F03373] dark:focus:outline-[#F03373]"
          />
          <TagInfo name="url image" className="absolute right-1 mx-2" />
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}
        <HtmlPreview
          urlImage={urlImage}
          selectStyle={selectStyle}
          copyHtml={copyHtml}
          setCopyHtml={setCopyHtml}
          checkedItems={checkedItems}
        />
        {/* HTML PREVIEW */}

        {/* FOOTER */}
        <div className="flex w-full items-center justify-between rounded-2xl border-2 bg-slate-100 p-5 shadow-md backdrop-blur-lg transition-all dark:border-none dark:bg-[#1e1e1e88]">
          <h1 className="select-none font-skyer text-xl font-bold text-[#8079FB] dark:text-slate-50">
            Footer
          </h1>

          {linksOptions.map(
            (item, index) =>
              (item.id !== "threads" ||
                (item.id === "threads" && selectStyle === "dupoc")) && (
                <SocialMediaLinks
                  name={item.id}
                  key={index}
                  isChecked={checkedItems[item.id]}
                  setIsChecked={(isChecked) => handleCheck(item.id, isChecked)}
                />
              ),
          )}

          <OptionSwitch
            options={footerOptions}
            option={footerPattern}
            setOption={setFooterPattern}
          />
        </div>
        {/* FOOTER */}

        <button
          onClick={() => handleCopy()}
          className="flex w-full items-center justify-center rounded-2xl border-none bg-[#8079FB] py-5 font-skyer text-3xl uppercase text-slate-50 shadow-md outline-none transition-all hover:bg-indigo-500 hover:text-slate-50 active:bg-indigo-700 dark:bg-gray-800 dark:hover:bg-slate-900 dark:active:bg-gray-950"
        >
          {wasCopied ? "copied" : "copy code"}
          {wasCopied && (
            <ClipboardDocumentCheckIcon width="50px" className="pl-3" />
          )}
        </button>
      </div>
      {/* HTML PREVIEW CONNTAINER */}
    </div>
  );
}
