import { Options } from "@/types/optionsType";
import { motion, AnimatePresence } from "framer-motion";

interface ILabelSwitchProps {
  option: string;
  setOption: (string: string) => void;
  options: Options
}

export const OptionSwitch = ({
  option,
  setOption,
  options
}: ILabelSwitchProps) => {
  const bubbleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex items-center justify-center rounded-lg border-[1px] border-[#AFAFAF] p-[5px]">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={() => setOption(item.id)}
          className={`relative cursor-pointer rounded px-2 font-baiJamjuree text-[16px] font-semibold transition-all ${
            option === item.id ? "text-[#FFF]" : "text-[#A1A1A1]"
          }`}
        >
          <AnimatePresence>
            {option === item.id && (
              <motion.div
                key={`bubble-${index}`}
                className="absolute inset-0 z-0 rounded bg-[#000000]"
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
