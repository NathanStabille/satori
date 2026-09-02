import { Options } from "@/types/optionsType";

interface IOptionsSwitchProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  option: string;
  setOption: (string: string) => void;
  options: Options;
}

export const OptionSwitch = ({
  option,
  setOption,
  options,
  ...rest
}: IOptionsSwitchProps) => {
  return (
    <label className="flex items-center gap-2 font-baiJamjuree text-sm font-semibold text-lightPrimarColor dark:text-darkPrimaryColor">
      <span className="sr-only">Target language</span>
      <select
        {...rest}
        value={option}
        onChange={(event) => setOption(event.target.value)}
        className="cursor-pointer rounded-lg border border-lightPrimarColor/30 bg-lightPrimarColor/10 px-3 py-2 text-sm text-lightPrimarColor outline-none transition-colors hover:border-lightPrimarColor focus:border-lightPrimarColor dark:border-darkPrimaryColor/40 dark:bg-darkPrimaryColor/10 dark:text-darkPrimaryColor dark:hover:border-darkPrimaryColor dark:focus:border-darkPrimaryColor"
      >
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
};
