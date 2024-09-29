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
} from "@heroicons/react/24/solid";
import { Options } from "@/types/optionsType";
import ReactCodeMirror from "@uiw/react-codemirror";

const footerDataMap = {
  playpix: {
    player: {
      pt: footerData.playpix.player.pt,
      en: footerData.playpix.player.en,
      es: footerData.playpix.player.es,
    },
    affiliate: {
      pt: footerData.playpix.affiliate.pt,
    },
  },
  dupoc: {
    player: {
      pt: footerData.dupoc.player.pt,
      en: footerData.dupoc.player.en,
      es: footerData.dupoc.player.es,
    },
    affiliate: {
      pt: footerData.dupoc.affiliate.pt,
    },
  },
};

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
  }, [pattern, stylePattern, setFooterAreaValue, selectedLanguage]);

  const onChange = useCallback(
    (value: string) => {
      setFooterAreaValue(value);
    },
    [setFooterAreaValue],
  );

  return (
    <div
      className={`h- w-full ${isDisable ? "bg-[#1a1b26]" : "bg-[#e8e9ed]"} select-none flex-col rounded-3xl pb-2 transition-all`}
    >
      <div className="flex items-center justify-between rounded-2xl bg-[#e8e9ed] p-3">
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <h1 className="rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">{`header </>`}</h1>
          <button
            onClick={() => {
              handleCopy();
            }}
            className="flex items-center justify-center gap-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1] outline-none transition-all hover:bg-[#A1A1A1] hover:text-[#D4D4D4] active:bg-[#c4c3c3]"
          >
            {`${wasCopied ? "copied!" : "copy code"}`}
            {wasCopied ? (
              <CheckIcon className="w-[23px]" />
            ) : (
              <ClipboardDocumentListIcon className="w-[23px]" />
            )}
          </button>
          <button
            onClick={() => {
              setIsDisable(!isDisable);
            }}
            className="flex items-center justify-center gap-2 rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1] outline-none transition-all hover:bg-[#A1A1A1] hover:text-[#D4D4D4] active:bg-[#c4c3c3]"
          >
            edit <PencilSquareIcon className="w-[23px]" />
          </button>
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
