import { motion } from 'framer-motion'

interface ILanguageSwitch {

  language: string,
  selectedLanguage: string,
  setSelectedLanguage: (selectedLanguage: string) => void


}

export const LanguageSwicth = ({ language, selectedLanguage, setSelectedLanguage }: ILanguageSwitch) => {



  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  }
  return (
    <>
    <motion.div
      layoutId='underline'
      onClick={() => handleLanguageChange(language)}
      className={`transition-all font-baiJamjuree text-[16px] px-2 font-semibold rounded cursor-pointer ${selectedLanguage === language ? 'bg-[#A1A1A1] text-[#D4D4D4]' : 'text-[#A1A1A1]'
      }`}
      >
      {language.toUpperCase()}
    </motion.div>
      </>

  )

}