import { Button } from "@/components/Button";
import Link from "next/link";

export default function Library() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-[url('/images/bg-light.webp')] bg-cover bg-no-repeat p-5 dark:bg-[url('/images/bg-dark.webp')]">
      <Link href='/satori'>
      <Button
        label="Back to Satori"
        className="rounded-[100px] border-none bg-[#7f79fb3d] px-5 py-2 text-sm font-semibold backdrop-blur-md"
        />
        </Link>
      <h1 className="font-skyer text-5xl font-medium text-[#8079FB]">
        satori library
      </h1>
      <div className="flex h-full w-full rounded-3xl bg-transparent p-5 shadow-lg backdrop-blur-md"></div>
    </div>
  );
}
