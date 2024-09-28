import { StyleSwitch } from "./StyleSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

export const MainBar = () => {
  return (
    <div className="flex h-[100px] w-full items-center justify-between rounded-2xl bg-[#e8e9ed] px-5">
      <h1 className="text-4xl font-skyer text-[#A1A1A1]">
        satori
        </h1>
        <StyleSwitch />
        <ThemeSwitch />
    </div>
  );
};
