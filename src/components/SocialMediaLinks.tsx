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
      <label className="borde relative flex h-4 w-4 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-50 outline outline-1 outline-[#8079FB] duration-300 dark:bg-[#1e1e1e] dark:outline-[#F03373]">
        <input
          className="peer hidden"
          type="checkbox"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <div className="left-2 top-2 z-20 h-3 w-3 scale-0 rounded-md bg-[#8079FB] opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300 dark:bg-[#F03373]" />
      </label>
      <h1 className="text-md ml-2 font-baiJamjuree font-semibold text-[#8079FB] dark:text-slate-50">
        {name.toUpperCase()}
      </h1>
    </div>
  );
};
