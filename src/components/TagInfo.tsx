import { ReactNode } from "react";

interface ITagInfoProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  className?: string;
  icon?: ReactNode;
}

export const TagInfo = ({ name, className, icon, ...rest }: ITagInfoProps) => {
  return (
    <label
      {...rest}
      className={`select-none rounded-lg border border-[#8079FB] bg-[#7f79fb33] p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#8079FB] dark:border-[#F03373] dark:bg-[#f033722c] dark:text-[#F03373] ${className}`}
    >
      {name}
      {icon}
    </label>
  );
};
