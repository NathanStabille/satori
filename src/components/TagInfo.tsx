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
      className={`border-lightPrimarColor text-lightPrimarColor dark:border-darkPrimaryColor dark:text-darkPrimaryColor select-none rounded-lg border p-[5px] px-2 py-1 font-baiJamjuree text-[16px] ${className}`}
    >
      {name}
      {icon}
    </label>
  );
};
