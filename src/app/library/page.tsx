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
        <Link href="/">
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
          className={`rounded-lg p-2 px-4 font-baiJamjuree font-medium transition hover:bg-zynexColor hover:text-gray-50 active:bg-zynexColor/60 ${filterSelect === "zynex" ? "bg-zynexColor text-gray-50" : "bg-zynexColor/20 text-zynexColor"}`}
          onClick={() => filterPattern("zynex")}
        >
          zynex
        </button>
        <button
          className={`rounded-lg p-2 px-4 font-baiJamjuree font-medium transition hover:bg-orvyaColor hover:text-gray-50 active:bg-orvyaColor/60 ${filterSelect === "orvya" ? "bg-orvyaColor text-gray-50" : "bg-orvyaColor/20 text-orvyaColor"}`}
          onClick={() => filterPattern("orvya")}
        >
          orvya
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
