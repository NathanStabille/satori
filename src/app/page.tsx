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
import { ArrowDownTrayIcon, LanguageIcon } from "@heroicons/react/24/solid";

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

export default function Satori() {
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();

  const { wasCopied, handleCopy } = useCopyToClipboard(bodyAreaValue);

  const handleDownload = () => {
    const file = new Blob([bodyAreaValue], { type: "text/html" });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "translated-page.html";
    link.click();
    URL.revokeObjectURL(downloadUrl);
  };

  const handleTranslate = async () => {
    if (!bodyAreaValue.trim()) {
      setErrorMessage("Insira um conteúdo HTML antes de traduzir");
      return;
    }

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
      className="min-h-screen w-full overflow-y-auto px-6 py-8 max-lg:px-4 max-md:px-3 max-md:py-4"
    >
      {/* CODE MIRROR CONTAINER */}
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] items-stretch gap-5 max-xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] max-lg:grid-cols-1">
        <section className="flex h-[calc(100vh-4rem)] max-h-[900px] min-h-[560px] min-w-0 flex-col max-lg:h-[560px] max-lg:min-h-0 max-md:h-[520px]">
          <div className="mb-4 flex w-full items-center justify-between gap-3 rounded-2xl bg-lightSecondColor p-4 shadow-md dark:bg-darkSecondColor max-md:flex-wrap">
            <h1 className="select-none font-skyer text-4xl text-lightPrimarColor dark:text-slate-50 max-md:text-3xl">
              satori
            </h1>
            <div className="max-md:order-3 max-md:w-full">
              <OptionSwitch
                option={selectedLanguage}
                setOption={setSelectedLanguage}
                options={allOptions}
              />
            </div>
            <Button
              className={
                !bodyAreaValue.trim() ? "cursor-not-allowed opacity-50" : ""
              }
              label={isLoading ? "Translating..." : "Translate"}
              iconAfter={<LanguageIcon className="w-[20px]" />}
              onClick={handleTranslate}
              disabled={isLoading || !bodyAreaValue.trim()}
              aria-busy={isLoading}
            />
          </div>

          <HtmlTranslate
            errorMessage={errorMessage}
            isLoading={isLoading}
            onTranslateError={setErrorMessage}
          />
        </section>
        {/* CODE MIRROR CONTAINER */}

        {/* HTML PREVIEW CONNTAINER */}
        <section className="flex h-[calc(100vh-4rem)] max-h-[900px] min-h-[560px] min-w-0 flex-col gap-4 max-lg:h-[560px] max-lg:min-h-0 max-md:h-[520px]">
          {/* MAIN BAR */}

          <div className="flex min-h-0 w-full flex-1 flex-col items-end justify-start rounded-2xl bg-lightSecondColor p-3 shadow-lg dark:border-none dark:bg-darkSecondColor">
            <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-3">
              <ThemeSwitcher />
              <div className="flex items-center gap-3 max-md:flex-1 max-md:justify-end">
                <Button
                  label="download html"
                  onClick={handleDownload}
                  iconAfter={<ArrowDownTrayIcon className="w-[22px]" />}
                  className="rounded-2xl px-3 max-sm:text-sm"
                />
                <TagInfo name="preview </>" />
              </div>
            </div>
            <HtmlPreview htmlContent={bodyAreaValue} />
          </div>
          {/* HTML PREVIEW */}

          <div className="flex w-full gap-3 max-sm:flex-col">
            <button
              onClick={() => handleCopy()}
              type="button"
              aria-label="Copy HTML"
              className="flex flex-1 items-center justify-center rounded-2xl border-none bg-lightPrimarColor py-4 font-skyer text-2xl uppercase text-slate-50 shadow-lg outline-none transition-all hover:bg-indigo-600 hover:text-slate-50 active:bg-indigo-700 dark:bg-darkPrimaryColor dark:hover:bg-red-600 dark:active:bg-red-700 max-sm:text-xl"
            >
              {wasCopied ? "copied" : "copy html"}
              {wasCopied && (
                <ClipboardDocumentCheckIcon width="50px" className="pl-3" />
              )}
            </button>
          </div>
        </section>
      </div>
      {/* HTML PREVIEW CONNTAINER */}
    </motion.div>
  );
}
