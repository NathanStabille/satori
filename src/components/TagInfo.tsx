interface ITagInfoProps {
  name: string;
  className?: string;
}

export const TagInfo = ({ name, className }: ITagInfoProps) => {
  return (
    <h1
      className={`select-none rounded-lg border border-[#8079FB] dark:border-[#F03373] bg-[#7f79fb33] dark:bg-[#f033722c] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#8079FB] dark:text-[#F03373] ${className}`}
    >{`${name} </>`}</h1>
  );
};
