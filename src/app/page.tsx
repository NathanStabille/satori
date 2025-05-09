"use client";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { HeaderTranslate } from "@/components/TranslateArea/HeaderTranslate";
import { FooterTranslate } from "@/components/TranslateArea/FooterTranslate";
import { TagInfo } from "@/components/TagInfo";
import { BodyTranslate } from "@/components/TranslateArea/BodyTranslate";
import { ThemeSwitcher } from "@/components/ThemeSwitcherButton";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import {
  ClipboardDocumentCheckIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { translateHtml } from "@/utils/translateHtml";
import { LanguageIcon } from "@heroicons/react/24/solid";

const styleOptions: Options = [
  {
    id: "zynex",
  },
  { id: "orvya" },
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

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

export default function Satori() {
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();

  const [selectStyle, setSelectStyle] = useState(styleOptions[0].id);
  const [footerPattern, setFooterPattern] = useState(footerOptions[0].id);
  const [urlImage, setUrlImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/reactgallery-17631.appspot.com/o/images%2FGroup%2015719.png?alt=media&token=beb0b119-e381-4134-80eb-74ea19b845a2",
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

  const handleTranslate = async () => {
    setIsLoading(true);
    setErrorMessage("");

    const result = await translateHtml(bodyAreaValue, selectedLanguage);

    if ("error" in result) {
      setIsLoading(false);
      setErrorMessage(result.error);
    } else {
      setIsLoading(false);
      setBodyAreaValue(result.translatedText);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`flex h-full w-full max-w-screen-2xl items-center justify-center gap-4 overflow-auto p-5 max-md:flex-col`}
    >
      {/* CODE MIRROR CONTAINER */}
      <div className="relative flex h-full w-[55%] flex-1 flex-col items-center justify-center">
        <div className="mb-4 flex w-full items-center justify-between rounded-2xl bg-lightSecondColor p-4 shadow-md dark:bg-darkSecondColor">
          <h1 className="select-none font-skyer text-4xl text-lightPrimarColor dark:text-slate-50">
            satori
          </h1>
          <OptionSwitch
            option={selectedLanguage}
            setOption={setSelectedLanguage}
            options={allOptions}
          />
          <Button
            label="Translate"
            iconAfter={<LanguageIcon className="w-[20px]" />}
            onClick={handleTranslate}
          />
        </div>

        <HeaderTranslate selectedLanguage={selectedLanguage} />
        <BodyTranslate
          errorMessage={errorMessage}
          isLoading={isLoading}
          onTranslateError={setErrorMessage}
        />
        <FooterTranslate
          pattern={footerPattern}
          stylePattern={selectStyle}
          checkedItems={checkedItems}
          footerPattern={footerPattern}
          setFooterPattern={setFooterPattern}
          footerOptions={footerOptions}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-[45%] flex-col items-center justify-center gap-4">
        {/* MAIN BAR */}
        <div className="flex h-[100px] w-full items-center justify-between rounded-2xl bg-lightSecondColor p-5 shadow-lg dark:border-none dark:bg-darkSecondColor">
          <OptionSwitch
            options={styleOptions}
            option={selectStyle}
            setOption={setSelectStyle}
          />

          <ThemeSwitcher />
        </div>
        {/* MAIN BAR */}

        {/* URL INPUT */}
        <div className="relative flex w-full items-center justify-center rounded-xl bg-lightSecondColor py-1 shadow-lg dark:bg-darkSecondColor">
          <input
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            type="url"
            className="h-full flex-1 rounded-xl bg-transparent p-3 pr-44 font-baiJamjuree text-lg text-lightPrimarColor focus:outline focus:outline-lightPrimarColor dark:text-darkPrimaryColor dark:focus:outline-darkPrimaryColor"
          />
          <TagInfo name="header image </>" className="absolute right-1 mx-2" />
        </div>
        {/* URL INPUT */}

        {/* HTML PREVIEW */}

        <div className="flex h-full w-full flex-col items-end justify-start rounded-2xl bg-lightSecondColor p-3 shadow-lg dark:border-none dark:bg-darkSecondColor max-md:h-[100vh]">
          <div className="mb-4 flex w-full items-center justify-between">
            <Link href="/library">
              <Button
                label="library"
                iconAfter={<Square3Stack3DIcon width={23} />}
              />
            </Link>
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
          className="flex w-full items-center justify-between rounded-2xl bg-lightSecondColor p-5 shadow-lg transition-all dark:border-none dark:bg-darkSecondColor"
        >
          <h1 className="select-none font-skyer text-xl font-bold text-lightPrimarColor dark:text-slate-50">
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
          className="flex w-full items-center justify-center rounded-2xl border-none bg-lightPrimarColor py-5 font-skyer text-3xl uppercase text-slate-50 shadow-lg outline-none transition-all hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-700 dark:bg-darkPrimaryColor dark:hover:bg-red-600 dark:active:bg-red-700"
        >
          {wasCopied ? "copied" : "copy html"}
          {wasCopied && (
            <ClipboardDocumentCheckIcon width="50px" className="pl-3" />
          )}
        </button>
      </div>
      {/* HTML PREVIEW CONNTAINER */}
    </motion.div>
  );
}
