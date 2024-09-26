'use client'
import { useState } from "react";

export const LanguageSwicth = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('pt'); // Estado inicial para o idioma


  const handleLanguageChange = (language: string) => {
    // Função para definir o idioma selecionado
    setSelectedLanguage(language);
  }
  return (

    <div className="flex justify-center items-center border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC]">
      <button
        onClick={() => handleLanguageChange('pt')}
        className={`transition-all font-baiJamjuree text-[16px] px-2 font-semibold rounded ${selectedLanguage === 'pt' ? 'bg-[#A1A1A1] text-[#D4D4D4]' : 'text-[#A1A1A1]'
          }`}
      >
        PT
      </button>

      <button
        onClick={() => handleLanguageChange('en')}
        className={`transition-all font-baiJamjuree text-[16px]  px-2 font-semibold rounded ${selectedLanguage === 'en' ? 'bg-[#A1A1A1] text-[#D4D4D4]' : 'text-[#A1A1A1]'
          }`}
      >
        EN
      </button>

      <button

        onClick={() => handleLanguageChange('es')}
        className={`transition-all font-baiJamjuree text-[16px]  px-2 font-semibold rounded ${selectedLanguage === 'es' ? 'bg-[#A1A1A1] text-[#D4D4D4]' : 'text-[#A1A1A1]'

          }`}
      >
        ES
      </button>
    </div>
  )

}