import { useCallback, useState } from "react";
import { TagInfo } from "../TagInfo";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { Button } from "../Button";
import {} from "@heroicons/react/24/outline";
import {
  LockClosedIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import CodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";

const customTokyoNight = tokyoNightInit({
  settings: {
    background: "transparent",
    gutterBackground: "transparent",
  },
});

interface BodyTranslateProps {
  onTranslateError: (error: string) => void;
  isLoading: boolean;
  errorMessage: string;
}

export const HtmlTranslate = ({
  onTranslateError,
  errorMessage,
  isLoading,
}: BodyTranslateProps) => {
  const [isDisable, setIsDisable] = useState(false);

  const { bodyAreaValue, setBodyAreaValue } = useTranslateArea();

  const onChange = useCallback(
    (value: string) => {
      setBodyAreaValue(value);
    },
    [setBodyAreaValue],
  );

  return (
    <>
      <div
        className={`rounded-xxl relative flex w-full items-center justify-between rounded-t-3xl transition-all ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} p-3`}
      >
        <div className="flex w-full items-center justify-between gap-3">
          <TagInfo name="html </>" />

          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                setIsDisable(!isDisable);
              }}
              label={isDisable ? "edit" : "lock"}
              iconAfter={
                isDisable ? (
                  <PencilSquareIcon className="w-[23px]" />
                ) : (
                  <LockClosedIcon className="w-[23px]" />
                )
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`relative h-full w-full ${isDisable ? "bg-gray-900" : "bg-lightSecondColor dark:bg-darkSecondColor"} flex-col overflow-auto rounded-b-2xl p-1 pb-2 shadow-md transition-all dark:border-none`}
      >
        {!isLoading && (
          <CodeMirror
            className={`relative rounded-t-lg bg-transparent p-2 transition-all`}
            value={bodyAreaValue}
            extensions={[htmlLanguage]}
            onChange={onChange}
            theme={customTokyoNight}
            editable={!isDisable}
          />
        )}

        {/* error modal component */}

        {errorMessage && (
          <div className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center">
            <div className="relative rounded-2xl bg-red-400 p-16 text-center font-jetBrains text-xl font-medium text-white shadow-md">
              {errorMessage}

              <Button
                className="absolute right-0 top-0 m-2"
                label=""
                onClick={() => onTranslateError("")}
                iconBefore={<XMarkIcon width={33} className="text-white" />}
              />
            </div>
          </div>
        )}

        {/* error modal component */}

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
