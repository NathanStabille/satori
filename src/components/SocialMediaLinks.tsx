
interface ISocialMediaLinksProps {

  name: string
}

export const SocialMediaLinks = ({name} : ISocialMediaLinksProps) => {
  return (
    <div className="transition-all flex items-center justify-center">
      <label className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-xl borde bg-gray-50 duration-300 outline outline-1 outline-[#38BDF8]">
        <input className="peer hidden " type="checkbox" />
        <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-lg bg-[#38BDF8] opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300" />
      </label>
      <h1 className="font-baiJamjuree text-md ml-2 font-medium text-[#AFAFAF]">{name}</h1>
    </div>
  );
};
