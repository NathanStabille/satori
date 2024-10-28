import Image from "next/image";
import { Button } from "./Button";
import { TagInfo } from "./TagInfo";
import { useState } from "react";
import { ILibraryDataType } from "@/data/libraryData";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { LinkIcon } from "@heroicons/react/24/outline";

export const LibraryCard = ({
  type,
  url,
  pattern,
  color,
}: ILibraryDataType) => {
  const [imageSize, setImageSize] = useState({ width: 0, heigth: 0 });

  return (
    <div className="before:via-lightThemeColor relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-2xl bg-transparent p-[2px] shadow-md transition-all duration-200 before:absolute before:h-[900px] before:w-full before:animate-rotation before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:content-[''] hover:scale-110 hover:before:opacity-100 dark:before:via-[#ea00ff]">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between rounded-xl bg-slate-100 p-4 dark:bg-gray-900">
        <div className="flex w-full cursor-pointer items-center justify-between">
          <TagInfo
            name={type}
            icon={<PhotoIcon width="23px" />}
            className="flex items-center justify-center gap-1"
          />
          <TagInfo
            name={pattern}
            style={{ backgroundColor: color }}
            className={`border-none px-3 text-slate-100 dark:text-slate-100`}
          />
        </div>

        <div className="flex h-full w-full cursor-pointer items-center justify-center overflow-auto p-3">
          <Image
            className=""
            width={type === "icon" ? 50 : 500}
            height={type === "icon" ? 50 : 500}
            quality={100}
            src={url || ""}
            alt="image"
            onLoad={(img) =>
              setImageSize({
                width: img.currentTarget.naturalWidth,
                heigth: img.currentTarget.naturalHeight,
              })
            }
          />
        </div>

        <div className={`flex w-full select-none items-center justify-between`}>
          <div className="text-lightThemeColor dark:text-darkThemeColor flex items-center justify-center gap-2 font-jetBrains">
            <span className="bg-lightThemeColor dark:bg-darkThemeColor rounded-lg px-2 text-slate-100">
              {`${imageSize.width}`}
            </span>
            x
            <span className="bg-lightThemeColor dark:bg-darkThemeColor rounded-lg px-2 text-slate-100">
            {`${imageSize.heigth}`}
            </span>
          </div>

          <Button label="get link" iconAfter={<LinkIcon width="23px" />} />
        </div>
      </div>
    </div>
  );
};
