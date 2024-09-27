'use client'
import { extractTextNodes } from "@/utils/translateHTML";
 import { useState } from "react"

 export default function HtmlTranslate() {

   const [html, setHtml] = useState('');
  //  const [translatedHtml, setTranslatedHtml] = useState('');

 


   console.log(extractTextNodes(html))

   return (
     <div className="h-full w-full p-5 bg-slate-950 grid grid-cols-2 gap-5">
       <div className="h-full w-full flex flex-col gap-3">
         <textarea name="emailText" id="emailText" value={html} onChange={(e) => setHtml(e.target.value)} className="h-full w-full flex-1 outline-none box-border resize-none p-2 rounded-xl font-jetBrains text-[16px] focus:bg-slate-100 transition-all"></textarea>
         <div className="flex justify-center items-center gap-5">
           <button className="w-full rounded-full bg-cyan-600 font-baiJamjuree font-medium text-white text-[20px] py-2 hover:bg-cyan-900 active:bg-cyan-500 transition-all">ENGLISH</button>
           <button className="w-full rounded-full bg-cyan-600 font-baiJamjuree font-medium text-white text-[20px] py-2 hover:bg-cyan-900 active:bg-cyan-500 transition-all">SPANISH</button>
         </div>
       </div>

       <div className="h-full w-full flex flex-col gap-3">
         <div className="h-full w-full bg-slate-900 rounded-xl">
         <iframe srcDoc={html} className="h-full w-full border-none rounded-lg" sandbox="allow-scripts allow-same-origin" title="HTML Preview" />
         </div>
         <button className="w-full rounded-full bg-cyan-600 font-baiJamjuree font-medium text-white text-[20px] py-2 hover:bg-cyan-900 active:bg-cyan-500 transition-all">COPY CODE</button>
       </div>
     </div>
   )
 }


