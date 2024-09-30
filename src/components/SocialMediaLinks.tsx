interface ISocialMediaLinksProps {
  name: string;
}

export const SocialMediaLinks = ({ name }: ISocialMediaLinksProps) => {
  return (
    <div className="flex items-center justify-center transition-all">
      <label className="borde relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-50 outline outline-1 outline-[#8079FB] duration-300">
        <input className="peer hidden" type="checkbox" />
        <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-lg bg-[#8079FB] opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
      </label>
      <h1 className="text-md ml-2 font-baiJamjuree font-medium text-[#8079FB]">
        {name}
      </h1>
    </div>
  );
};
