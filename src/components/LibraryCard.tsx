import Image from "next/image";
import { Button } from "./Button";
import { TagInfo } from "./TagInfo";
import { useState } from "react";
import { ILibraryDataType, iframeConfig } from "@/data/libraryData";
import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  CodeBracketSquareIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export const LibraryCard = ({
  type,
  url,
  html,
  pattern,
  color,
}: ILibraryDataType) => {
  const [imageSize, setImageSize] = useState({ width: 0, heigth: 0 });

  return (
    <div className="before:animate-rotation before:via-lightThemeColor relative flex h-[400px] w-[550px] items-center justify-center overflow-hidden rounded-2xl bg-transparent p-[2px] shadow-md transition-all duration-200 before:absolute before:h-[900px] before:w-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:content-[''] hover:scale-110 hover:before:opacity-100 dark:before:via-[#ea00ff]">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between rounded-xl bg-slate-100 p-4 dark:bg-gray-900">
        <div className="flex w-full items-center justify-between">
          <TagInfo
            name={type}
            icon={
              type === "image" ? (
                <PhotoIcon width="23px" />
              ) : (
                <CodeBracketSquareIcon width="23px" />
              )
            }
            className="flex items-center justify-center gap-1"
          />
          <TagInfo
            name={pattern}
            style={{ backgroundColor: color }}
            className={`border-none px-3 text-slate-100 dark:text-slate-100`}
          />
        </div>

        <div className="flex h-full w-full items-center justify-center overflow-auto p-3">
          {type === "image" && (
            <Image
              width={imageSize.width}
              height={imageSize.heigth}
              src={url || ""}
              alt="image"
              onLoadingComplete={(img) =>
                setImageSize({
                  width: img.naturalWidth,
                  heigth: img.naturalHeight,
                })
              }
            />
          )}

          {type === "html" && (
            <iframe
              srcDoc={`${iframeConfig} ${html}`}
              className="box-border flex h-full w-full items-center justify-center overflow-hidden"
              sandbox="allow-scripts allow-same-origin"
              title="HTML Preview"
            />
            // <div className="flex h-full w-full items-center justify-center">
            //   <div
            //     dangerouslySetInnerHTML={{ __html: `${iframeConfig} ${html}` }}
            //     className="flex h-full w-full items-center justify-center"
            //   />
            // </div>
          )}
        </div>

        <div
          className={`flex w-full select-none items-center ${type === "image" ? "justify-between" : "justify-end"}`}
        >
          {imageSize && type === "image" && (
            <div className="text-lightThemeColor dark:text-darkThemeColor flex items-center justify-center gap-2 font-jetBrains">
              <span className="bg-lightThemeColor dark:bg-darkThemeColor rounded-lg px-2 text-slate-100">
                {imageSize.width}
              </span>
              x
              <span className="bg-lightThemeColor dark:bg-darkThemeColor rounded-lg px-2 text-slate-100">
                {imageSize.heigth}
              </span>
            </div>
          )}
          <Button
            className="mt-3"
            label={type === "image" ? "get link" : "get code"}
            iconAfter={
              type === "image" ? (
                <LinkIcon width="23px" />
              ) : (
                <CodeBracketIcon width="23px" />
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
