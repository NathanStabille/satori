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
      className={`flex select-none items-center justify-center gap-2 rounded-lg border border-[#8079FB] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#8079FB] outline-none transition-all hover:bg-[#8079FB] hover:text-slate-50 active:bg-[#5049d3] dark:border-[#F03373] dark:text-[#F03373] dark:hover:bg-[#F03373] dark:hover:text-[#1e1e1e] dark:active:bg-[#E9004F] ${className}`}
      {...rest}
    >
      {iconBefore}
      {label}
      {iconAfter}
    </button>
  );
};
