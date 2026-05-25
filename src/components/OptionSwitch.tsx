import { Options } from "@/types/optionsType";
import { motion, AnimatePresence } from "framer-motion";

interface IOptionsSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option: string;
  setOption: (string: string) => void;
  options: Options;
}

export const OptionSwitch = ({
  option,
  setOption,
  options,
  ...rest
}: IOptionsSwitchProps) => {
  const bubbleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex select-none items-center justify-center gap-1 rounded-lg p-[5px]">
      {options.map((item, index) => (
        <button
          {...rest}
          key={index}
          onClick={() => setOption(item.id)}
          className={`relative cursor-pointer rounded px-2 font-baiJamjuree text-[16px] font-semibold transition-all hover:bg-lightPrimarColor hover:text-slate-50 dark:hover:bg-darkPrimaryColor dark:hover:text-slate-50 dark:active:bg-red-600 ${
            option === item.id
              ? "text-slate-50"
              : "text-lightPrimarColor dark:text-darkPrimaryColor"
          }`}
        >
          <AnimatePresence>
            {option === item.id && (
              <motion.div
                key={`bubble-${index}`}
                className="absolute inset-0 z-0 rounded bg-lightPrimarColor dark:bg-darkPrimaryColor"
                variants={bubbleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{item.id.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};
