import Image from "next/image";
import { Button } from "./Button";
import { TagInfo } from "./TagInfo";
import { useState } from "react";

export const LibraryCard = () => {
  const [imageSize, setImageSize] = useState({ width: 0, heigth: 0 });

  return (
    <div className="before:animate-rotation before:via-lightThemeColor relative flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-transparent p-[2px] shadow-md transition-all duration-200 before:absolute before:h-[700px] before:w-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:content-[''] hover:scale-110 hover:before:opacity-100 dark:before:via-[#ea00ff]">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between rounded-xl bg-slate-100 p-4 dark:bg-gray-900">
        <div className="flex w-full items-center justify-between">
          <TagInfo name=" html" />
          <TagInfo
            name=" html"
            className="dark:bg-darkThemeColor bg-indigo-500 text-slate-100 dark:text-slate-100"
          />
        </div>

        <div className="overflow-hidden p-3">
          <Image
            width={1000}
            height={1000}
            src="https://crmcontent.betconstruct.com/24082917280402002187501150023061900000000000000089176.png"
            alt="image"
            onLoadingComplete={(img) =>
              setImageSize({
                width: img.naturalWidth,
                heigth: img.naturalHeight,
              })
            }
          />
        </div>

        <div
          className={`flex w-full select-none items-center ${imageSize ? "justify-between" : "justify-end"}`}
        >
          {imageSize && (
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
          <Button label="get code </>" />
        </div>
      </div>
    </div>
  );
};
