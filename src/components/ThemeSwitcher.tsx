import useThemeSwitcher from "@/hooks/useThemeSwitcher";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        className="peer hidden"
        id="toggle"
        type="checkbox"
        checked={theme === "dark" ? true : false}
        onClick={toggleTheme}
      />
      <div className="relative h-[35px] w-[80px] rounded-full bg-white from-indigo-500 to-blue-400 shadow-sm duration-300 after:absolute after:left-[5px] after:top-[2px] after:h-[30px] after:w-[30px] after:rounded-full after:bg-gradient-to-r after:shadow-md after:duration-300 after:content-[''] active:after:w-[50px] peer-checked:bg-zinc-700 peer-checked:after:left-[75px] peer-checked:after:translate-x-[-100%] peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900" />
    </label>
  );
};
