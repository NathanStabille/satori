import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { Button } from "./Button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <Button
      label=""
      className={`flex rounded-[13px] bg-[#7f79fb42] transition-all dark:bg-[#ee34723d] ${className}`}
      onClick={toggleTheme}
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
