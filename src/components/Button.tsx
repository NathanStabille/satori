import { ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const Button = ({
  label,
  icon,
  className = "",
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`flex h-full items-center justify-center gap-2 rounded-lg border border-[#8079FB] px-2 py-1 font-baiJamjuree text-[16px] font-medium text-[#8079FB] outline-none transition-all hover:bg-[#8079FB] hover:text-slate-50 active:bg-[#5049d3] ${className}`}
      {...rest}
    >
      {label}
      {icon}
    </button>
  );
};
