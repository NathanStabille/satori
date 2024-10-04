import { useCallback, useState } from "react";
import { OptionSwitch } from "./OptionSwitch";
import { TagInfo } from "./TagInfo";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Options } from "@/types/optionsType";
import { Button } from "./Button";
import {
  CheckIcon,
  ClipboardDocumentListIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import CodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { translateHtml } from "@/utils/translateHtml";

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

export const BodyTranslate = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(bodyAreaValue);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = useCallback(
    (value: string) => {
      setBodyAreaValue(value);
    },
    [setBodyAreaValue],
  );

  const handleTranslate = async (html: string, targetLang: string) => {
    setIsLoading(true);
    const translated = await translateHtml(html, targetLang);

    if (translated) {
      setIsLoading(false);
      setBodyAreaValue(translated);
    }
  };

  return (
    <>
      <div
        className={`rounded-xxl flex w-full items-center justify-between rounded-t-3xl transition-all ${isDisable ? "bg-[#1a1b26]" : "bg-slate-100 dark:bg-[#1e1e1e88]"} p-3`}
      >
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <Button
          label="Translate"
          iconAfter={<LanguageIcon className="w-[20px]" />}
          onClick={() => handleTranslate(bodyAreaValue, selectedLanguage)}
        />
        <div className="flex items-center justify-center gap-3">
          <TagInfo name="body </>" />

          <Button
            onClick={() => {
              handleCopy();
            }}
            label={`${wasCopied ? "copied!" : "copy code"}`}
            iconAfter={
              wasCopied ? (
                <CheckIcon className="w-[23px]" />
              ) : (
                <ClipboardDocumentListIcon className="w-[23px]" />
              )
            }
          />

          <Button
            onClick={() => {
              setIsDisable(!isDisable);
            }}
            label="edit"
            iconAfter={<PencilSquareIcon className="w-[23px]" />}
          />
        </div>
      </div>
      <div
        style={{ backdropFilter: "blur(20px)" }}
        className={`relative mb-5 h-full w-full ${isDisable ? "bg-[#1a1b26]" : "bg-slate-100 dark:bg-[#1e1e1e88]"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-xl backdrop-blur-md transition-all dark:border-none`}
      >
        <CodeMirror
          className={`overflow-auto rounded-t-lg bg-transparent p-2 transition-all`}
          value={bodyAreaValue}
          extensions={[htmlLanguage]}
          onChange={onChange}
          theme={tokyoNight}
          editable={isDisable}
          height={`100%`}
        />

        {/* loading component */}

        {isLoading && (
          <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center rounded-3xl bg-[#00000062]">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-[#8079FB] text-4xl text-[#8079FB]">
                <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-[#EE3473] text-2xl text-[#EE3473]" />
              </div>
            </div>
          </div>
        )}
        {/* loading component */}
      </div>
    </>
  );
};
