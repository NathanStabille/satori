import { ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconAfter?: ReactNode;
  iconBefore?: ReactNode;
  className?: string;
}

export const Button = ({
  label,
  iconAfter,
  iconBefore,
  className = "",
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`flex select-none items-center justify-center gap-2 rounded-xl bg-lightPrimarColor/20 px-3 py-2 font-baiJamjuree text-[16px] text-lightPrimarColor outline-none transition-all hover:bg-lightPrimarColor hover:text-slate-50 active:bg-indigo-600 dark:border-darkPrimaryColor dark:bg-darkPrimaryColor/10 dark:text-darkPrimaryColor dark:hover:bg-darkPrimaryColor dark:hover:text-[#1e1e1e] dark:active:bg-red-600 ${className}`}
      {...rest}
    >
      {iconBefore}
      {label}
      {iconAfter}
    </button>
  );
};
