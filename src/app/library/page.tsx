"use client";
import { Button } from "@/components/Button";
import { LibraryCard } from "@/components/LibraryCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcherButton";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { libraryImageData } from "@/data/libraryData";
import Link from "next/link";
import { useState } from "react";

export default function Library() {
  // const building = true;

  // if (building) {
  //   redirect("/");
  // }

  const [filterSelect, setFilterSelect] = useState("");
  const [libraryItems, setLibraryItems] = useState(libraryImageData);

  const filterPattern = (pattern: string) => {
    setFilterSelect(pattern);

    const filteredItems = libraryImageData.filter(
      (items) => items.pattern === pattern,
    );

    setLibraryItems(filteredItems);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-y-auto p-5"
    >
      <div className="fixed top-5 flex w-full items-center justify-between px-5">
        <Link href="/satori">
          <Button
            iconBefore={<ArrowLeftIcon className="w-[23px]" />}
            label="Back to Satori"
            className="border-none bg-[#7f79fb3d] px-5 py-2 text-sm font-semibold backdrop-blur-md dark:bg-[#68233a8a]"
          />
        </Link>

        <ThemeSwitcher />
      </div>
      <h1 className="mb-5 pt-10 font-skyer text-5xl font-medium text-[#8079FB] dark:text-darkPrimaryColor">
        satori library
      </h1>
      <div className="flex w-full items-center justify-center gap-5">
        <button
          className={`active:bg-playpixColor/60 hover:bg-playpixColor rounded-lg p-2 px-4 font-baiJamjuree font-medium transition hover:text-gray-50 ${filterSelect === "playpix" ? "bg-playpixColor text-gray-50" : "bg-playpixColor/20 text-playpixColor"}`}
          onClick={() => filterPattern("playpix")}
        >
          playpix
        </button>
        <button
          className={`active:bg-dupocColor/60 hover:bg-dupocColor rounded-lg p-2 px-4 font-baiJamjuree font-medium transition hover:text-gray-50 ${filterSelect === "dupoc" ? "bg-dupocColor text-gray-50" : "bg-dupocColor/20 text-dupocColor"}`}
          onClick={() => filterPattern("dupoc")}
        >
          dupoc
        </button>
      </div>
      <div className="grid h-full w-full justify-items-center gap-5 overflow-auto rounded-3xl bg-transparent p-5 transition-all md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6 min-[3000px]:grid-cols-8">
        {libraryItems.map((item, index) => (
          <LibraryCard
            key={index}
            type={item.type}
            url={item.url}
            html={item.html}
            pattern={item.pattern}
            color={item.color}
          />
        ))}
      </div>
    </motion.div>
  );
}
