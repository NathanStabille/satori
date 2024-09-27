'use client'
import { useTranslateArea } from "@/context/TranslateAreaContext"


export const HtmlPreview = () => {

  const { headerAreaValue } = useTranslateArea()
  const { bodyAreaValue } = useTranslateArea()
  const { footerAreaValue } = useTranslateArea()

  const mainHtml = `
    <!DOCTYPE html>
<html lang="PT-BR">

<head>
  
</head>

<body>

  <!--- Início Tabela Principal  --->

  <table cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #080D1C;">

    
  ${headerAreaValue}
    <!--- Body --->
    ${bodyAreaValue}
    <!--- Body --->

    <!---  Footer  --->
    ${footerAreaValue}

    
    <!---  Footer  --->

  </table>
  <!--- Fim Tabela Principal  --->
</body>

</html>`



  return (
    <div className="h-full w-full flex justify-center items-center">
      {/* <div className="h-full w-full mt-3" dangerouslySetInnerHTML={{ __html: mainHtml }} /> */}
      <iframe srcDoc={mainHtml} className="h-full w-full border-none rounded-lg" sandbox="allow-scripts allow-same-origin" title="HTML Preview" />

    </div>
  )
}