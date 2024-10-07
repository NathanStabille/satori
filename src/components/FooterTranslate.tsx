import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { OptionSwitch } from "./OptionSwitch";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { useCallback, useEffect, useState } from "react";
import { htmlLanguage } from "@codemirror/lang-html";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { footerAdvisor, footerMainData } from "@/data/footerData";
import {
  CheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { Options } from "@/types/optionsType";
import CodeMirror from "@uiw/react-codemirror";
import { TagInfo } from "./TagInfo";
import { Button } from "./Button";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useSocialMediaLinks } from "@/context/SocialMediaLinksContext";
import { linksData } from "@/data/linksData";

const options: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

interface IFooterTranslateProps {
  pattern: string;
  stylePattern: string;
  checkedItems: { [key: string]: boolean };
  footerOptions: Options;
  footerPattern: string;
  setFooterPattern: (value: string) => void;
}

export const FooterTranslate = ({
  pattern,
  stylePattern,
  checkedItems,
  footerOptions,
  footerPattern,
  setFooterPattern,
}: IFooterTranslateProps) => {
  const { footerAreaValue, setFooterAreaValue, setFooterAdv } =
    useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(footerAreaValue);
  const [isDisable, setIsDisable] = useState(false);
  const [allOptions, setAllOptions] = useState(options);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);
  const { setX, setIg, setSite, setThreads } = useSocialMediaLinks();

  useEffect(() => {
    if (pattern === "affiliate") {
      setAllOptions([{ id: "pt" }]);
      setSelectedLanguage("pt");
      if (stylePattern === "playpix") {
        setFooterAreaValue(footerMainData.playpix.affiliate.pt);
      } else {
        setFooterAreaValue(footerMainData.dupoc.affiliate.pt);
      }
    } else {
      setAllOptions(options);
    }
  }, [pattern, stylePattern, setFooterAreaValue]);

  useEffect(() => {
    switch (selectedLanguage) {
      case "pt":
        setFooterAdv(footerAdvisor.pt);
        break;
      case "en":
        setFooterAdv(footerAdvisor.en);
        break;
      case "es":
        setFooterAdv(footerAdvisor.es);
        break;
    }
  }, [selectedLanguage, setFooterAdv]);

  useEffect(() => {
    if (pattern !== "affiliate") {
      if (stylePattern === "playpix") {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerMainData.playpix.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerMainData.playpix.player.en);
            break;
          case "es":
            setFooterAreaValue(footerMainData.playpix.player.es);
            break;
        }
      } else {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerMainData.dupoc.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerMainData.dupoc.player.en);
            break;
          case "es":
            setFooterAreaValue(footerMainData.dupoc.player.es);
            break;
        }
      }
    }
  }, [selectedLanguage, stylePattern, pattern, setFooterAreaValue]);

  useEffect(() => {
    if (checkedItems.x) {
      if (stylePattern === "playpix") {
        setX(linksData.playpix.x);
      } else {
        setX(linksData.dupoc.x);
      }
    } else {
      setX("");
    }
    if (checkedItems.instagram) {
      if (stylePattern === "playpix") {
        setIg(linksData.playpix.ig);
      } else {
        setIg(linksData.dupoc.ig);
      }
    } else {
      setIg("");
    }
    if (checkedItems.site) {
      if (stylePattern === "playpix") {
        setSite(linksData.playpix.site);
      } else {
        setSite(linksData.dupoc.site);
      }
    } else {
      setSite("");
    }
    if (checkedItems.threads) {
      if (stylePattern === "playpix") {
        setThreads("");
      } else {
        setThreads(linksData.dupoc.thr);
      }
    } else {
      setThreads("");
    }
  }, [checkedItems, setX, stylePattern, setIg, setSite, setThreads]);

  const onChange = useCallback(
    (value: string) => {
      setFooterAreaValue(value);
    },
    [setFooterAreaValue],
  );

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

        <OptionSwitch
          options={footerOptions}
          option={footerPattern}
          setOption={setFooterPattern}
        />
        <div className="flex items-center justify-center gap-3">
          <TagInfo name="footer </>" />
          <Button
            onClick={() => {
              handleCopy();
            }}
            label={`${wasCopied ? "copied!" : "copy"}`}
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
        className={`relative h-[80%] w-full ${isDisable ? "bg-gray-900" : "dark:bg-darkSecondColor bg-lightSecondColor"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-md transition-all dark:border-none`}
      >
        <CodeMirror
          className={`overflow-auto bg-transparent transition-all`}
          value={footerAreaValue}
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
