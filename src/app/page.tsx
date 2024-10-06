"use client";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { HeaderTranslate } from "@/components/HeaderTranslate";
import { FooterTranslate } from "@/components/FooterTranslate";
import { TagInfo } from "@/components/TagInfo";
import { BodyTranslate } from "@/components/BodyTranslate";
import { ThemeSwitcher } from "@/components/ThemeSwitcherButton";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

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
  const { wasCopied, handleCopy } = useCopyToClipboard(copyHtml);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    x: true,
    instagram: true,
    site: true,
    threads: true,
  });

  const handleCheck = (name: string, isChecked: boolean) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: isChecked,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`flex h-full w-full items-center justify-center gap-4 overflow-auto p-5 max-md:flex-col`}
    >
      {/* CODE MIRROR CONTAINER */}
      <div className="flex h-full w-[55%] flex-1 flex-col items-center justify-center">
        <HeaderTranslate />
        <BodyTranslate />
        <FooterTranslate
          pattern={footerPattern}
          stylePattern={selectStyle}
          checkedItems={checkedItems}
          footerPattern={footerPattern}
          setFooterPattern={setFooterPattern}
          footerOptions={footerOptions}
        />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-[45%] flex-col items-center justify-center gap-4">
        {/* MAIN BAR */}
        <div className="bg-lightSecondColor dark:bg-darkSecondColor flex h-[100px] w-full items-center justify-between rounded-2xl p-5 shadow-lg backdrop-blur-lg dark:border-none">
          <h1 className="text-lightPrimarColor select-none font-skyer text-4xl dark:text-slate-50">
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
        <div className="bg-lightSecondColor dark:bg-darkSecondColor relative flex w-full items-center justify-center rounded-xl py-1 shadow-lg backdrop-blur-lg">
          <input
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            type="url"
            className="text-lightPrimarColor focus:outline-lightPrimarColor dark:text-darkPrimaryColor dark:focus:outline-darkPrimaryColor h-full flex-1 rounded-xl bg-transparent p-3 pr-44 font-baiJamjuree text-lg font-medium focus:outline"
          />
          <TagInfo name="header image </>" className="absolute right-1 mx-2" />
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}

        <div
          style={{ backdropFilter: "blur(20px)" }}
          className="bg-lightSecondColor dark:bg-darkSecondColor flex h-full w-full flex-col items-end justify-start rounded-2xl p-3 shadow-lg backdrop-blur-lg max-md:h-[100vh] dark:border-none"
        >
          <div className="mb-4 flex w-full items-center justify-end">
            <TagInfo name="preview </>" />
          </div>
          <HtmlPreview
            urlImage={urlImage}
            selectStyle={selectStyle}
            copyHtml={copyHtml}
            setCopyHtml={setCopyHtml}
            checkedItems={checkedItems}
          />
        </div>
        {/* HTML PREVIEW */}

        {/* FOOTER */}
        <div
          style={{ backdropFilter: "blur(20px)" }}
          className="bg-lightSecondColor dark:bg-darkSecondColor flex w-full items-center justify-between rounded-2xl p-5 shadow-lg backdrop-blur-lg transition-all dark:border-none"
        >
          <h1 className="text-lightPrimarColor select-none font-skyer text-xl font-bold dark:text-slate-50">
            Footer
          </h1>

          <div className="flex w-full justify-around">
            {linksOptions.map(
              (item, index) =>
                (item.id !== "threads" ||
                  (item.id === "threads" && selectStyle === "dupoc")) && (
                  <SocialMediaLinks
                    name={item.id}
                    key={index}
                    isChecked={checkedItems[item.id]}
                    setIsChecked={(isChecked) =>
                      handleCheck(item.id, isChecked)
                    }
                  />
                ),
            )}
          </div>
        </div>
        {/* FOOTER */}

        <button
          onClick={() => handleCopy()}
          className="bg-lightPrimarColor dark:bg-darkPrimaryColor flex w-full items-center justify-center rounded-2xl border-none py-5 font-skyer text-3xl uppercase text-slate-50 shadow-lg outline-none transition-all hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-700 dark:hover:bg-red-600 dark:active:bg-red-700"
        >
          {wasCopied ? "copied" : "copy code"}
          {wasCopied && (
            <ClipboardDocumentCheckIcon width="50px" className="pl-3" />
          )}
        </button>
      </div>
      {/* HTML PREVIEW CONNTAINER */}
    </motion.div>
  );
}
