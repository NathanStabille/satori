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
      className={`bg-lightPrimarColor/20 dark:bg-darkPrimaryColor/10 text-lightPrimarColor hover:bg-lightPrimarColor dark:border-darkPrimaryColor dark:text-darkPrimaryColor dark:hover:bg-darkPrimaryColor flex select-none items-center justify-center gap-2 rounded-xl px-3 py-2 font-baiJamjuree text-[16px] font-medium outline-none transition-all hover:text-slate-50 active:bg-indigo-600 dark:hover:text-[#1e1e1e] dark:active:bg-red-600 ${className}`}
      {...rest}
    >
      {iconBefore}
      {label}
      {iconAfter}
    </button>
  );
};
