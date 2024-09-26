'use client'
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { ClipboardDocumentListIcon, CheckIcon  } from "@heroicons/react/24/outline"
import { LanguageSwicth } from "./LanguageSwitch"
import CodeMirror from "@uiw/react-codemirror"
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { htmlLanguage } from "@codemirror/lang-html"
import { useCallback, useState } from "react"
import './TranslateArea.css'



interface ITranslateAreaProps {

  typeArea: string,
  value: string,
  setValue: (value: string) => void
}

export const TranslateArea = ({typeArea, value, setValue}: ITranslateAreaProps) => {

  const [wasCopied, setWasCopied] = useState(false)
  const [isDisable, setIsDisable] = useState(false)


  const onChange = useCallback((value: string) => {
    setValue(value);
  }, [setValue])


  const handleCopy = () => {

    navigator.clipboard.writeText(value).then(() => {
      setWasCopied(true)
      setTimeout(()=> {
      setWasCopied(false)
      }, 3000)
    }).catch((err)=>{
      console.error('Erro ao copiar o texto: ', err);
    })
  }



  return (
    <div className="h-full w-full bg-[#DBDBDB] rounded-3xl flex flex-col p-1 ">
      <div className="flex justify-between items-center p-2">
        <LanguageSwicth />
        <div className="flex justify-center items-center gap-3">
          <div className=" border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] font-baiJamjuree text-[16px] py-1 px-2 font-medium text-[#A1A1A1]">{`${typeArea} </>`}</div>
          <button onClick={() => { handleCopy() }} className=" transition-all flex gap-2 justify-center items-center
                               border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] 
                               font-baiJamjuree outline-none text-[16px] py-1 px-2 font-medium text-[#A1A1A1]
                               hover:bg-[#A1A1A1] hover:text-[#D4D4D4] active:bg-[#c4c3c3]"
          >
            {`${wasCopied? 'copied!' : 'copy code'}` }
            {wasCopied? <CheckIcon className="w-[23px]" /> : <ClipboardDocumentListIcon className="w-[23px]" />}
          </button>
          <button onClick={() => { setIsDisable(!isDisable) }} className=" transition-all flex gap-2 justify-center items-center
                               border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] 
                               font-baiJamjuree outline-none text-[16px] py-1 px-2 font-medium text-[#A1A1A1]
                               hover:bg-[#A1A1A1] hover:text-[#D4D4D4] active:bg-[#c4c3c3]"
          >
            edit <PencilSquareIcon className="w-[23px]" />
          </button>
        </div>
      </div>

      <CodeMirror className={`h-full ${isDisable ? 'bg-[#1a1b26]' : 'bg-transparent'} rounded-t-lg rounded-b-3xl py-1 transition-all`} value={value} height="100%" extensions={[htmlLanguage]} onChange={onChange} theme={tokyoNight} editable={isDisable} />
    </div >
  )
}