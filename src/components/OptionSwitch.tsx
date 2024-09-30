import { Options } from "@/types/optionsType";
import { motion, AnimatePresence } from "framer-motion";

interface ILabelSwitchProps {
  option: string;
  setOption: (string: string) => void;
  options: Options;
}

export const OptionSwitch = ({
  option,
  setOption,
  options,
}: ILabelSwitchProps) => {
  const bubbleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex items-center justify-center gap-1 rounded-lg p-[5px]">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={() => setOption(item.id)}
          className={`relative cursor-pointer rounded px-2 font-baiJamjuree text-[16px] font-semibold transition-all hover:bg-indigo-500 hover:text-slate-50 dark:hover:bg-[#F03373] dark:active:bg-[#E9004F] ${
            option === item.id
              ? "text-slate-50"
              : "text-[#8079FB] dark:text-[#F03373]"
          }`}
        >
          <AnimatePresence>
            {option === item.id && (
              <motion.div
                key={`bubble-${index}`}
                className="absolute inset-0 z-0 rounded bg-[#8079FB] dark:bg-[#F03373]"
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
