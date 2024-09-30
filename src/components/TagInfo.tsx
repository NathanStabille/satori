interface ITagInfoProps {
  name: string;
  className?: string;
}

export const TagInfo = ({ name, className }: ITagInfoProps) => {
  return (
    <h1
      className={`select-none rounded-lg border border-[#8079FB] bg-[#7f79fb33] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#8079FB] ${className}`}
    >{`${name} </>`}</h1>
  );
};
