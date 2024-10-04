"use client";
import { Button } from "@/components/Button";
import { LibraryCard } from "@/components/LibraryCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { libraryData } from "@/data/libraryData";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Library() {
  const building = true;

  if (building) {
    redirect("/satori");
  }

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
      <h1 className="mb-5 pt-10 font-skyer text-5xl font-medium text-[#8079FB] dark:text-[#EE3473]">
        satori library
      </h1>
      <div className="grid h-full w-full grid-cols-2 justify-items-center gap-5 overflow-auto rounded-3xl bg-transparent p-5 transition-all">
        {libraryData.map((item, index) => (
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
