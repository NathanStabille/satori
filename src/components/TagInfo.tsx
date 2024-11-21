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
      className={`select-none rounded-lg border border-lightPrimarColor p-[5px] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-lightPrimarColor dark:border-darkPrimaryColor dark:text-darkPrimaryColor ${className}`}
    >
      {name}
      {icon}
    </label>
  );
};
