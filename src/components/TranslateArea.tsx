'use client'
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { LanguageSwicth } from "./LanguageSwitch"
import { useState } from "react"

export const TranslateArea = () => {

  const [isDisable, setIsDisable] = useState(true);

  return (
    <div className="h-full w-full bg-[#DBDBDB] rounded-3xl flex flex-col p-1">
      <div className="flex justify-between items-center p-2">
        <LanguageSwicth />
        <div className="flex justify-center items-center gap-3">
          <div className=" border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] font-baiJamjuree text-[16px] py-1 px-2 font-medium text-[#A1A1A1]">{`header </>`}</div>
          <button onClick={()=> {setIsDisable(!isDisable)}} className=" transition-all flex gap-2 justify-center items-center
                               border-[#AFAFAF] border-[1px] rounded-lg p-[5px] bg-[#CCCCCC] 
                               font-baiJamjuree outline-none text-[16px] py-1 px-2 font-medium text-[#A1A1A1]
                               hover:bg-[#A1A1A1] hover:text-[#D4D4D4] active:bg-[#c4c3c3]"
          >
            edit <PencilSquareIcon className="w-[23px]" />
          </button>
        </div>
      </div>
      <textarea name="" id="" value={'asdasdasda'} disabled={isDisable} className="w-full h-full p-2 bg-transparent box-border outline-none resize-none rounded-b-3xl rounded-t-lg font-baiJamjuree text-[16px] focus:bg-slate-50 disabled:text-[#A1A1A1] " />
    </div>
  )
}