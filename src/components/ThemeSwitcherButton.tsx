'use client'
import { useTheme } from "next-themes";
import { Button } from "./Button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      label=""
      className={`flex rounded-[13px] bg-[#7f79fb42] transition-all dark:bg-[#ee34723d] ${className}`}
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      iconAfter={
        theme === "light" ? (
          <MoonIcon className="w-[30px] transition-all" />
        ) : (
          <SunIcon className="w-[30px] transition-all" />
        )
      }
    />
  );
};
