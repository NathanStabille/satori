import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  ClipboardDocumentListIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { OptionSwitch } from "./OptionSwitch";
import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { htmlLanguage } from "@codemirror/lang-html";
import { useCallback, useEffect, useState } from "react";
import "./CodeMirror.css";
import { Options } from "@/types/optionsType";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { headerData } from "@/data/headerData";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { TagInfo } from "./TagInfo";
import { Button } from "./Button";

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

const headerLanguageMap = {
  pt: headerData.pt,
  en: headerData.en,
  es: headerData.es,
};

export const HeaderTranslate = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const { headerAreaValue, setHeaderAreaValue } = useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(headerAreaValue);

  const onChange = useCallback(
    (value: string) => {
      setHeaderAreaValue(value);
    },
    [setHeaderAreaValue],
  );

  useEffect(() => {
    if (selectedLanguage in headerLanguageMap) {
      setHeaderAreaValue(
        headerLanguageMap[selectedLanguage as keyof typeof headerLanguageMap],
      );
    }
  }, [selectedLanguage, setHeaderAreaValue]);

  return (
    <>
      <div
        className={`rounded-xxl flex w-full items-center justify-between rounded-t-3xl transition-all ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} p-3`}
      >
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <TagInfo name="header </>" />

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
        className={`relative mb-5 h-[40%] w-full ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-xl backdrop-blur-md transition-all dark:border-none`}
      >
        <CodeMirror
          className={`overflow-auto rounded-t-lg bg-transparent p-2 transition-all`}
          value={headerAreaValue}
          extensions={[htmlLanguage]}
          onChange={onChange}
          theme={tokyoNight}
          editable={isDisable}
          height={`100%`}
        />
      </div>
    </>
  );
};
