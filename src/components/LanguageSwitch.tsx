'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const options = [
  { id: 'pt' },
  { id: 'en' },
  { id: 'es' }
]

export const LanguageSwitch = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0].id);

  const bubbleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="flex justify-center items-center border-[#AFAFAF] border-[1px] rounded-lg p-[5px]">
      {options.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedLanguage(item.id)}
          className={`relative transition-all font-baiJamjuree text-[16px] px-2 font-semibold rounded cursor-pointer ${
            selectedLanguage === item.id ? 'text-[#FFF]' : 'text-[#A1A1A1]'
          }`}
        >
          <AnimatePresence>
            {selectedLanguage === item.id && (
              <motion.div
                key={`bubble-${index}`}
                className="absolute inset-0 z-0 bg-[#000000] rounded"
                variants={bubbleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
            <span className='relative z-10'>

          {  item.id.toUpperCase()}
          </span> 
           
        </button>
      ))}
    </div>
  );
};
