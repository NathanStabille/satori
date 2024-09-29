"use client";
import { useStyleHtml } from "@/context/StyleHtmlConext";
import { useTranslateArea } from "@/context/TranslateAreaContext";
import { styleHtmlData } from "@/data/styleHtmlData";
import { useEffect } from "react";

interface IHtmlPreviewProps {
  urlImage: string;
  selectStyle: string;
}

export const HtmlPreview = ({ urlImage, selectStyle }: IHtmlPreviewProps) => {
  const { headerAreaValue } = useTranslateArea();
  const { bodyAreaValue } = useTranslateArea();
  const { footerAreaValue } = useTranslateArea();
  const { styleHtml, setStyleHtml } = useStyleHtml();

  useEffect(() => {
    if (selectStyle === "playpix") {
      setStyleHtml(styleHtmlData.playpix);
    } else {
      setStyleHtml(styleHtmlData.dupoc);
    }
  });

  const mainHtml = `<!DOCTYPE html>
<html lang="PT-BR">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="UTF-8">
  ${styleHtml.fontGoogleLink}
  <style>
    * {
      padding: 0;
      margin: 0;
      font-family: ${styleHtml.fontFamily}, 'helvetica', arial, sans-serif !important;
      box-sizing: border-box !important;
    }


    @media (max-width: 450px) {

      .logo {
        max-width: 75.26px !important;
        margin: 20px auto 16px auto !important;
      }

      .buttons-container {
        padding: 10px 0 !important;
        margin: 0 auto 196px auto !important;
      }

      .button-header {
        font-size: 12px !important;
      }

      .title-body {
        font-size: 24px !important;
        margin: 17px 0 48px 0 !important;
        line-height: 30px !important;
      }

      .text-body {
        font-size: 14px !important;
      }

      .text-body-secundary {
        font-size: 12px !important;
      }

      .bonus-de {
        font-size: 24px !important;
        line-height: 30px !important;
        padding-bottom: 12px !important;
      }

      .cem-porcento {
        font-size: 32px !important;
      }

      .icon-bonus {
        width: 46px !important;
      }

      .bonus-txt-1 {
        font-size: 16px !important;
        line-height: 15px !important;
        text-align: left !important;
        letter-spacing: 2px !important;
      }

      .bonus-txt-2 {
        font-size: 40px !important;
        text-align: left !important;
        line-height: 48px !important;
      }

      .bonus-container {
        padding: 20px 0 !important;
      }

      .cta {
        font-size: 18px !important;
        max-width: 259px !important;
        padding: 17px 0 !important;
      }

      .margin-containers {
        margin: 0 auto 25px auto !important;
      }

      .responsive-box {
        width: 100% !important;
        text-align: center !important;
        padding: 0 !important;
      }

      .subtitle-body {
        font-size: 16px !important;
      }

      .number-pass {
        font-size: 40px !important;
      }

      .image-tesouro-desktop {
        display: none !important;
      }

      .image-tesouro-mobile {
        display: block !important;
        margin: 0 auto 15px auto !important;
        max-width: 305px !important;
      }

      .container-tesouro {
        margin: 0 auto !important;
        width: 87% !important;
      }

      .como-se-engajar {
        padding: 20px !important;
      }

      .guildas {
        max-width: 100px !important;
      }

      .icon-proximos-passos {
        max-width: 50px !important;
      }
    }
  </style>
</head>

<body>

  <!--- Início Tabela Principal  --->

  <table cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: ${styleHtml.bg_color};">

    ${headerAreaValue}

    <!---  Header  --->
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td>
              <img src=${urlImage}
                style="display: block; width: 100%;" alt="header-image" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!---  Header  --->

    <!---  Body  --->
    ${bodyAreaValue}
    <!--- Body --->

    <!---  Footer  --->
    ${footerAreaValue}
    <!---  Footer  --->

  </table>
  <!--- Fim Tabela Principal  --->
</body>

</html>`;

  return (
    <div className="flex h-full w-full items-center justify-center rounded">
      <iframe
        srcDoc={mainHtml}
        className="h-full w-full border-none"
        sandbox="allow-scripts allow-same-origin"
        title="HTML Preview"
      />
    </div>
  );
};
