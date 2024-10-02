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
}

export const FooterTranslate = ({
  pattern,
  stylePattern,
  checkedItems,
}: IFooterTranslateProps) => {
  const { footerAreaValue, setFooterAreaValue, setFooterAdv } =
    useTranslateArea();
  const { wasCopied, handleCopy } = useCopyToClipboard(footerAreaValue);
  const [isDisable, setIsDisable] = useState(false);
  const [allOptions, setAllOptions] = useState(options);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);
  const { setX, setIg, setSite } = useSocialMediaLinks();

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
  }, [checkedItems, setX, stylePattern, setIg, setSite]);

  // console.log(checkedItems.instagram)

  const onChange = useCallback(
    (value: string) => {
      setFooterAreaValue(value);
    },
    [setFooterAreaValue],
  );

  return (
    <div
      className={`relative h-full w-full ${isDisable ? "bg-[#1a1b26]" : "bg-slate-100 dark:bg-[#1e1e1e88]"} flex-col rounded-3xl pb-2 shadow-lg backdrop-blur-md transition-all dark:border-none`}
    >
      <div className="rounded-xxl flex items-center justify-between bg-transparent p-3">
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
      <CodeMirror
        className={`relative overflow-auto rounded-t-lg bg-transparent p-1 transition-all`}
        value={footerAreaValue}
        extensions={[htmlLanguage]}
        onChange={onChange}
        theme={tokyoNight}
        editable={isDisable}
        height="24vh"
      />
    </div>
  );
};
