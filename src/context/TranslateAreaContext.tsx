'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

interface ITranslateProviderProps {
  children: ReactNode,
}
interface ITranslateAreaContextType {
  headerAreaValue: string;
  setHeaderAreaValue: (value: string) => void;
  bodyAreaValue: string;
  setBodyAreaValue: (value: string) => void;
  footerAreaValue: string;
  setFooterAreaValue: (value: string) => void;
}
const TranslateAreaContext = createContext<ITranslateAreaContextType>({
  headerAreaValue: '',
  setHeaderAreaValue: () => { },
  bodyAreaValue: '',
  setBodyAreaValue: () => { },
  footerAreaValue: '',
  setFooterAreaValue: () => { },

})

export const TranslateAreaProvider = ({ children }: ITranslateProviderProps) => {


  const [headerAreaValue, setHeaderAreaValue] = useState(`<meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <style>
    * {
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', 'helvetica', arial, sans-serif !important;
      box-sizing: border-box !important;
    }

    ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px !important;
    border-radius: 10px !important;
    background-color: transparent !important;

    }

    ::-webkit-scrollbar-thumb {
    border-radius: 10px !important;
    background: #888 !important;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555 !important;
    border-radius: 10px !important;
    cursor: pointer !important;
    }
    ::-webkit-scrollbar-corner {
    display: none;
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
        margin: 17px 0 38px 0 !important;
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
        max-width: 219px !important;
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
    }
  </style>`)
  const [bodyAreaValue, setBodyAreaValue] = useState(`<tr style="background-color: #FFF;">
      <td style="display: block; width: 90%; margin: 0 auto;">
        <p style="color: #838383; font-size: 12px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 20px 0; text-align: center;"
          class="text-body-secundary">Se não quiser mais receber nossas comunicações, <a href="{UnsubscribeLink}"
            style="color: #838383 !important; text-decoration: none !important;">descadastre-se.</a></p>
      </td>
    </tr>

    <!---  Header  --->
    <tr>
      <td>
        <table cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td>
              <img src="https://crmcontent.betconstruct.com/24082120192735802187501150022211300000000000000089176.png"
                style="display: block; width: 100%;" alt="header-image" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!---  Header  --->

    <!---  Body  --->

    <tr>
      <td>
        <table cellpadding="0" cellspacing="0"
          style="background-repeat: no-repeat; background-size: 100% 100%; width: 100%; margin: 0 auto;">

          <!-- Título  -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 87%; margin: 0 auto;">
                <tr>
                  <td>
                    <h1
                      style="color: #FFF; font-size: 28px; font-family: Montserrat; font-style: normal;font-weight: bold;  display: block; margin: 30px 0 40px 0; max-width: 520px; line-height: 40px;"
                      class="title-body">Bem-vindo ao Programa de Afiliados da PlayPIX!</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Título  -->

          <!-- Olá, "Nome"  -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 87%; margin: 0 auto; margin: 0 auto 40px auto;"
                class="margin-containers">
                <tr>
                  <td>
                    <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin-bottom: 18px;"
                      class="text-body"> <b>Olá, parceiro!</b></p>
                    <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block;"
                      class="text-body">Seja muito bem-vindo ao programa de afiliados da PlayPIX! Estamos felizes por
                      tê-lo conosco e mal podemos esperar para começar essa <strong>jornada de sucesso</strong> ao seu lado!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Olá, "Nome"  -->

          <!--  -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0"
                style="width: 87%; margin: 0 auto 40px auto; border-radius: 32px 12px; min-height: 145px;"
                class="bonus-container margin-containers">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0"
                      style="margin: 0 auto; width: 100%; padding: 2px; border-radius: 32px 12px; min-height: 145px; background: linear-gradient(260deg, #166490 5.5%, #375B54 53.34%, #771C25 104.14%), var(--Color-Neutral-White, #FFF);">
                      <tr>
                        <td>
                          <table cellpadding="0" cellspacing="0"
                            style="margin: 0 auto; width: 100%; border-radius: 32px 12px; background-color: #080D1C; min-height: 141px; padding: 30px; text-align: center;">
                            <tr>
                              <td>

                                <p style="color: #FFF; font-size: 18px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; text-align: center; max-width: 425px; margin: 0 auto;"
                                  class="text-body">Em breve, a <b>primeira missão será lançada</b>, trazendo desafios
                                  emocionantes e oportunidades incríveis para você e seu esquadrão.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!--  -->

          <!--  -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 87%; margin: 0 auto; margin: 0 auto 40px auto;"
                class="margin-containers">
                <tr>
                  <td>
                    <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin-bottom: 20px;"
                      class="text-body"><b>Fique atento</b> aos próximos e-mails para mais detalhes sobre a missão.
                    </p>
                    <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin-bottom: 20px;"
                      class="text-body">Prepare-se para a aventura!
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!--  -->
          <!-- CTA  -->

          <!-- CTA  -->
        </table>
      </td>
    </tr>`)
  const [footerAreaValue, setFooterAreaValue] = useState(`<tr>
      <td>
        <table cellpadding="0" cellspacing="0" style="width: 87%; margin: 0 auto;" class="footer-container">

          <!-- Info Footer  -->

          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 auto;">
                <tr>
                  <td>
                    <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 0 0 40px 0; text-align: center;"
                      class="text-body">Até mais,<br> <b>Equipe PlayPIX</b></p>
                    <p style="color: #FFF; font-size: 14px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 0 0 40px 0; text-align: center;"
                      class="text-body-secundary">Este e-mail foi gerado automaticamente, não responda esse email.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0"
                style="width: 100%; margin: 0 auto 40px auto; padding: 28px; background-color: #081C38; border-radius: 28px;"
                class="margin-containers">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0"
                      style="width: 16%; margin-left: 1%;  margin: 0 auto; float: left; padding-top: 15px;"
                      class="responsive-box">
                      <tr>
                        <td>
                          <img
                            src="https://crmcontent.betconstruct.com/24061320255190002187501150022211300000000000000089176.png"
                            alt="icone ajuda" />
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" style="width: 83%; margin: 0 auto; float: left;"
                      class="responsive-box">
                      <tr>
                        <td>
                          <p
                            style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: bold; display: block; margin-bottom: 10px;">
                            Precisa de ajuda?</p>
                          <p style="color: #FFF; font-size: 14px; font-family: Montserrat; font-style: normal;font-weight: normal; display: block;"
                            class="text-body-secundary">Entre em contato com nosso suporte <a
                              href="afiliados@playpix.com"
                              style="font-weight: bold !important; color: #FFF !important; text-decoration: none !important;">afiliados@playpix.com</a>
                            ou através do telegram <a href="https://t.me/central_playpix"
                              style="color: #FFFFFF !important;">clicando aqui.</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="margin: 0 auto 40px auto;" class="margin-containers">
                <tr>
                  <td style="padding-right: 20px;">
                    <a href="https://www.instagram.com/playpix.official"><img
                        src="https://crmcontent.betconstruct.com/24061416361964002187501150022211300000000000000089176.png"
                        style="display: block; margin: 0 auto;" class="icon-rede-social" alt="icone-rede-social" /></a>
                  </td>
                  <td style="padding-right: 20px;">
                    <a href="https://x.com/playpixbr"><img
                        src="https://crmcontent.betconstruct.com/24061416362599702187501150022211300000000000000089176.png"
                        style="display: block; margin: 0 auto;" class="icon-rede-social" alt="icone-rede-social" /></a>
                  </td>
                  <td>
                    <a href="https://www.playpix.com/pb/"><img
                        src="https://crmcontent.betconstruct.com/24061416363229502187501150022211300000000000000089176.png"
                        style="display: block; margin: 0 auto; max-width: 100px;" class="icon-rede-social"
                        alt="logo-playpix-footer" /></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 auto;">
                <tr>
                  <td>
                    <p style="color: #FFF; font-size: 14px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 0 0 40px 0; text-align: center;"
                      class="text-body-secundary"><b>Atenção:</b> Jogos de azar podem ser viciantes. Por favor, jogue
                      com responsabilidade.</p>
                    <p style="color: #FFF; font-size: 14px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 0 0 40px 0; text-align: center;"
                      class="text-body-secundary">Você está recebendo este e-mail por ter criado uma conta na PlayPix.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Info Footer  -->
        </table>
      </td>
    </tr>`)


  return (
    <TranslateAreaContext.Provider value={{
      headerAreaValue, setHeaderAreaValue,
      bodyAreaValue, setBodyAreaValue,
      footerAreaValue, setFooterAreaValue
    }}>
      {children}
    </TranslateAreaContext.Provider>
  )

}
export const useTranslateArea = () => useContext(TranslateAreaContext)

