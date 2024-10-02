"use client";
import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Library() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-5"
    >
      <div className="fixed top-5 flex w-full items-center justify-between px-5">
        <Link href="/satori">
          <Button
            iconBefore={<ArrowLeftIcon className="w-[23px]" />}
            label="Back to Satori"
            className="rounded-[100px] border-none bg-[#7f79fb3d] px-5 py-2 text-sm font-semibold backdrop-blur-md"
          />
        </Link>

        <ThemeSwitcher />
      </div>
      <h1 className="font-skyer text-5xl font-medium text-[#8079FB] dark:text-[#EE3473]">
        satori library
      </h1>
      <div className="flex h-full w-full rounded-3xl bg-transparent p-5 shadow-lg backdrop-blur-md"></div>
    </motion.div>
  );
}
