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
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onChange = useCallback(
    (value: string) => {
      setBodyAreaValue(value);
    },
    [setBodyAreaValue],
  );

  const handleTranslate = async (html: string, targetLang: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    const result = await translateHtml(html, targetLang);

    if ("error" in result) {
      setIsLoading(false);
      setErrorMessage(result.error);
    } else {
      setIsLoading(false);
      setBodyAreaValue(result.translatedText);
    }
  };

  return (
    <>
      <div
        className={`rounded-xxl relative flex w-full items-center justify-between rounded-t-3xl transition-all ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} p-3`}
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
        className={`relative mb-4 h-full w-full ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-md transition-all dark:border-none`}
      >
        {!isLoading && (
          <CodeMirror
            className={`relative rounded-t-lg bg-transparent p-2 transition-all`}
            value={bodyAreaValue}
            extensions={[htmlLanguage]}
            onChange={onChange}
            theme={tokyoNight}
            editable={isDisable}
            height={`100%`}
          />
        )}

        {/* error component */}

        {errorMessage && (
          <div className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center">
            <div className="relative rounded-2xl bg-red-400 p-16 text-center font-jetBrains text-xl font-medium text-white shadow-md">
              {errorMessage}
              <h1 className="font-baiJamjuree text-base text-black">
                Contate o administrador
              </h1>

              <Button
                className="absolute right-0 top-0 m-2"
                label=""
                onClick={() => setErrorMessage(null)}
                iconBefore={<XMarkIcon width={33} className="text-white" />}
              />
            </div>
          </div>
        )}

        {/* error component */}

        {/* loading component */}

        {isLoading && (
          <div className="absolute inset-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[#00000062] backdrop-blur-sm">
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
