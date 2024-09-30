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
} from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import ReactCodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

export const BodyTranslate = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(bodyAreaValue);

  const onChange = useCallback(
    (value: string) => {
      setBodyAreaValue(value);
    },
    [setBodyAreaValue],
  );

  return (
    <div
      className={`h- w-full ${isDisable ? "bg-[#1a1b26]" : "bg-slate-100"} select-none flex-col rounded-3xl border border-slate-200 pb-2 shadow-lg backdrop-blur-md transition-all`}
    >
      <div className="flex w-full items-center justify-between rounded-3xl bg-transparent p-3 backdrop-blur-sm">
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <TagInfo name="body" />

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
      <ReactCodeMirror
        className={`overflow-auto rounded-t-lg bg-transparent p-2 transition-all`}
        value={bodyAreaValue}
        extensions={[htmlLanguage]}
        onChange={onChange}
        theme={tokyoNight}
        editable={isDisable}
        height="100%"
        maxHeight="39vh"
      />
    </div>
  );
};
