"use client";
import { HtmlPreview } from "@/components/HtmlPreview";
import { OptionSwitch } from "@/components/OptionSwitch";
import { Options } from "@/types/optionsType";
import { useState } from "react";
import { TagInfo } from "@/components/TagInfo";
import { HtmlTranslate } from "@/components/TranslateArea/HtmlTranslate";
import { ThemeSwitcher } from "@/components/ThemeSwitcherButton";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { translateHtml } from "@/utils/translateHtml";
import { LanguageIcon } from "@heroicons/react/24/solid";

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

export default function Satori() {
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();

  const { wasCopied, handleCopy } = useCopyToClipboard(bodyAreaValue);

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
            label={isLoading ? "Translating..." : "Translate"}
            iconAfter={<LanguageIcon className="w-[20px]" />}
            onClick={handleTranslate}
            disabled={isLoading}
            aria-busy={isLoading}
          />
        </div>

        <HtmlTranslate
          errorMessage={errorMessage}
          isLoading={isLoading}
          onTranslateError={setErrorMessage}
        />
      </div>
      {/* CODE MIRROR CONTAINER */}

      {/* HTML PREVIEW CONNTAINER */}
      <div className="flex h-full w-[45%] flex-col items-center justify-center gap-4">
        {/* MAIN BAR */}

        <div className="flex h-full w-full flex-col items-end justify-start rounded-2xl bg-lightSecondColor p-3 shadow-lg dark:border-none dark:bg-darkSecondColor max-md:h-[100vh]">
          <div className="mb-4 flex w-full items-center justify-between">
            <ThemeSwitcher />
            <TagInfo name="preview </>" />
          </div>
          <HtmlPreview htmlContent={bodyAreaValue} />
        </div>
        {/* HTML PREVIEW */}

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
