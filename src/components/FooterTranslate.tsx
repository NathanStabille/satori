import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { OptionSwitch } from "./OptionSwitch";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { useCallback, useEffect, useState } from "react";
import { htmlLanguage } from "@codemirror/lang-html";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { footerData } from "@/data/footerData";
import {
  CheckIcon,
  ClipboardDocumentListIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { Options } from "@/types/optionsType";
import ReactCodeMirror from "@uiw/react-codemirror";
import { TagInfo } from "./TagInfo";
import { Button } from "./Button";

const options: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

interface IFooterTranslateProps {
  pattern: string;
  stylePattern: string;
}

export const FooterTranslate = ({
  pattern,
  stylePattern,
}: IFooterTranslateProps) => {
  const { footerAreaValue, setFooterAreaValue } = useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(footerAreaValue);
  const [isDisable, setIsDisable] = useState(false);
  const [allOptions, setAllOptions] = useState(options);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);

  useEffect(() => {
    if (pattern === "affiliate") {
      setAllOptions([{ id: "pt" }]);
      setSelectedLanguage("pt");
      if (stylePattern === "playpix") {
        setFooterAreaValue(footerData.playpix.affiliate.pt);
      } else {
        setFooterAreaValue(footerData.dupoc.affiliate.pt);
      }
    } else {
      setAllOptions(options);
    }
  }, [pattern, stylePattern, setFooterAreaValue]);

  useEffect(() => {
    if (pattern !== "affiliate") {
      if (stylePattern === "playpix") {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerData.playpix.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerData.playpix.player.en);
            break;
          case "es":
            setFooterAreaValue(footerData.playpix.player.es);
            break;
        }
      } else {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerData.dupoc.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerData.dupoc.player.en);
            break;
          case "es":
            setFooterAreaValue(footerData.dupoc.player.es);
            break;
        }
      }
    }
  }, [selectedLanguage, stylePattern, pattern, setFooterAreaValue]);

  const onChange = useCallback(
    (value: string) => {
      setFooterAreaValue(value);
    },
    [setFooterAreaValue],
  );

  return (
    <div
      className={`h- w-full ${isDisable ? "bg-[#1a1b26]" : "bg-transparent"} select-none flex-col rounded-3xl border border-slate-200 pb-2 shadow-lg backdrop-blur-md transition-all`}
    >
      <div className="flex items-center justify-between rounded-xxl bg-transparent p-3">
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <TagInfo name="footer" />
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
        className={`overflow-auto rounded-t-lg bg-transparent p-1 transition-all`}
        value={footerAreaValue}
        extensions={[htmlLanguage]}
        onChange={onChange}
        theme={tokyoNight}
        editable={isDisable}
        height="100%"
        maxHeight="25vh"
      />
    </div>
  );
};
