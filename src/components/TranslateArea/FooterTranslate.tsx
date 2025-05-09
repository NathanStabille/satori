import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { OptionSwitch } from "../OptionSwitch";
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
import { TagInfo } from "../TagInfo";
import { Button } from "../Button";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useSocialMediaLinks } from "@/context/SocialMediaLinksContext";
import { linksData } from "@/data/linksData";

interface FooterTranslateProps {
  pattern: string;
  stylePattern: string;
  checkedItems: { [key: string]: boolean };
  footerOptions: Options;
  footerPattern: string;
  setFooterPattern: (value: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (e: string) => void;
}

export const FooterTranslate = ({
  pattern,
  stylePattern,
  checkedItems,
  footerOptions,
  footerPattern,
  setFooterPattern,
  selectedLanguage,
  setSelectedLanguage,
}: FooterTranslateProps) => {
  const { footerAreaValue, setFooterAreaValue, setFooterAdv, footerAdv } =
    useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(footerAreaValue);
  const [isDisable, setIsDisable] = useState(false);
  const { setX, setIg, setSite, setThreads } = useSocialMediaLinks();

  useEffect(() => {
    if (pattern === "affiliate") {
      setSelectedLanguage("pt");
      if (stylePattern === "zynex") {
        setFooterAreaValue(footerMainData.zynex.affiliate.pt);
      } else {
        setFooterAreaValue(footerMainData.orvya.affiliate.pt);
      }
    }
  }, [pattern, stylePattern, setFooterAreaValue, setSelectedLanguage]);

  useEffect(() => {
    switch (selectedLanguage) {
      case "pt":
        setFooterAdv(footerAdvisor.pt);
        if (stylePattern === "orvya") {
          setFooterAdv(footerAdvisor.pt.replaceAll("Zynex", "Orvya"));
        }

        break;
      case "en":
        setFooterAdv(footerAdvisor.en);
        if (stylePattern === "orvya") {
          setFooterAdv(footerAdvisor.en.replaceAll("Zynex", "Orvya"));
        }
        break;
      case "es":
        setFooterAdv(footerAdvisor.es);
        if (stylePattern === "orvya") {
          setFooterAdv(footerAdvisor.es.replaceAll("Zynex", "Orvya"));
        }
        break;
    }
  }, [selectedLanguage, setFooterAdv, stylePattern, footerAdv]);

  useEffect(() => {
    if (pattern !== "affiliate") {
      if (stylePattern === "zynex") {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerMainData.zynex.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerMainData.zynex.player.en);
            break;
          case "es":
            setFooterAreaValue(footerMainData.zynex.player.es);
            break;
        }
      } else {
        switch (selectedLanguage) {
          case "pt":
            setFooterAreaValue(footerMainData.orvya.player.pt);
            break;
          case "en":
            setFooterAreaValue(footerMainData.orvya.player.en);
            break;
          case "es":
            setFooterAreaValue(footerMainData.orvya.player.es);
            break;
        }
      }
    }
  }, [selectedLanguage, stylePattern, pattern, setFooterAreaValue]);

  useEffect(() => {
    if (checkedItems.x) {
      if (stylePattern === "zynex") {
        setX(linksData.zynex.x);
      } else {
        setX(linksData.orvya.x);
      }
    } else {
      setX("");
    }
    if (checkedItems.instagram) {
      if (stylePattern === "zynex") {
        setIg(linksData.zynex.ig);
      } else {
        setIg(linksData.orvya.ig);
      }
    } else {
      setIg("");
    }
    if (checkedItems.site) {
      if (stylePattern === "zynex") {
        setSite(linksData.zynex.site);
      } else {
        setSite(linksData.orvya.site);
      }
    } else {
      setSite("");
    }
    if (checkedItems.threads) {
      if (stylePattern === "zynex") {
        setThreads("");
      } else {
        setThreads(linksData.orvya.thr);
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
        className={`relative h-[80%] w-full ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-md transition-all dark:border-none`}
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
