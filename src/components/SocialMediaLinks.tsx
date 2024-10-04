interface ISocialMediaLinksProps {
  name: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const SocialMediaLinks = ({
  name,
  isChecked,
  setIsChecked,
}: ISocialMediaLinksProps) => {
  return (
    <div className="flex select-none items-center justify-center transition-all">
      <label className="borde relative flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-50 outline outline-1 outline-lightPrimarColor duration-300 dark:bg-darkBgColor dark:outline-darkPrimaryColor">
        <input
          className="peer hidden"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="left-2 top-2 z-20 h-3 w-3 scale-0 rounded-md bg-lightPrimarColor opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300 dark:bg-darkPrimaryColor" />
      </label>
      <h1 className="text-md ml-2 font-baiJamjuree font-semibold text-lightPrimarColor dark:text-slate-50">
        {name.toUpperCase()}
      </h1>
    </div>
  );
};
