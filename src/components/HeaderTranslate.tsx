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
    <div
      className={`h- w-full ${isDisable ? "bg-[#1a1b26]" : "dark:bg-[#1e1e1e88] bg-slate-100"} select-none flex-col rounded-3xl border-2 border-slate-200 dark:border-gray-800 pb-2 shadow-lg backdrop-blur-md transition-all`}
    >
      <div className="flex w-full items-center justify-between rounded-3xl bg-transparent p-3 ">
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <TagInfo name="header" />

          <Button
            onClick={() => {
              handleCopy();
            }}
            label={`${wasCopied ? "copied!" : "copy code"}`}
            icon={
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
            icon={<PencilSquareIcon className="w-[23px]" />}
          />
        </div>
      </div>
      <CodeMirror
        className={`overflow-auto rounded-t-lg bg-transparent p-2 transition-all`}
        value={headerAreaValue}
        extensions={[htmlLanguage]}
        onChange={onChange}
        theme={tokyoNight}
        editable={isDisable}
        height="13vh"
      />
    </div>
  );
};
