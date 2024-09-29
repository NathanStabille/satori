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
import "./TranslateArea.css";
import { Options } from "@/types/optionsType";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { headerData } from "@/data/headerData";
import { footerData } from "@/data/footerData";

interface ITranslateAreaProps {
  typeArea: string;
  value: string;
  setValue: (value: string) => void;
  pattern: string;
  style?: string;
}

const allOptions: Options = [{ id: "pt" }, { id: "en" }, { id: "es" }];

const headerLanguageMap = {
  pt: headerData.pt,
  en: headerData.en,
  es: headerData.es,
};

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

export const TranslateArea = ({
  typeArea,
  value,
  setValue,
  pattern,
  style,
}: ITranslateAreaProps) => {
  const [wasCopied, setWasCopied] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(allOptions[0].id);
  const { setHeaderAreaValue, setFooterAreaValue } = useTranslateArea();

  const onChange = useCallback(
    (value: string) => {
      setValue(value);
    },
    [setValue],
  );

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setWasCopied(true);
        setTimeout(() => {
          setWasCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o texto: ", err);
      });
  };

  useEffect(() => {
    if (typeArea === "header" && selectedLanguage in headerLanguageMap) {
      setHeaderAreaValue(
        headerLanguageMap[selectedLanguage as keyof typeof headerLanguageMap],
      );
    }
  }, [typeArea, selectedLanguage, setHeaderAreaValue]);

  useEffect(() => {
    if (typeArea === "footer" && style && pattern) {
      const styleData = footerDataMap[style as keyof typeof footerDataMap];

      // Verifica se pattern é uma chave válida (player ou affiliate)
      if (pattern in styleData) {
        const patternData = styleData[pattern as keyof typeof styleData];
        const languageValue =
          patternData?.[selectedLanguage as keyof typeof patternData];

        if (languageValue) {
          setFooterAreaValue(languageValue);
        } else {
          console.error(
            "Valor não encontrado para a combinação de estilo, padrão e idioma",
          );
        }
      } else {
        console.error(`Padrão inválido: ${pattern}`);
      }
    }
  }, [typeArea, style, pattern, selectedLanguage, setFooterAreaValue]);

  return (
    <div
      className={`h-full w-full ${isDisable ? "bg-[#1a1b26]" : "bg-[#e8e9ed]"} select-none flex-col rounded-3xl transition-all`}
    >
      <div className="flex items-center justify-between rounded-2xl bg-[#e8e9ed] p-3">
        <OptionSwitch
          option={selectedLanguage}
          setOption={setSelectedLanguage}
          options={allOptions}
        />

        <div className="flex items-center justify-center gap-3">
          <h1 className="rounded-lg border-[1px] border-[#AFAFAF] bg-[#CCCCCC] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#A1A1A1]">{`${typeArea} </>`}</h1>
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
      <CodeMirror
        className={`overflow-auto rounded-t-lg bg-transparent p-1 transition-all`}
        value={value}
        extensions={[htmlLanguage]}
        onChange={onChange}
        theme={tokyoNight}
        editable={isDisable}
      />
    </div>
  );
};
