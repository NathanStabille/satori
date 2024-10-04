export interface ILibraryDataType {
  type: string;
  url?: string;
  html?: string;
  pattern: string;
  color: string;
}

export const libraryData: ILibraryDataType[] = [
  {
    type: "html",
    html: `<tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 auto 40px auto;"
                class="margin-containers">
                <tr>
                  <td>
                    <img
                      src="https://crmcontent.betconstruct.com/24080914095410102187501150022211300000000000000089176.png"
                      style="display: block; margin: 0 auto; width: 100%;" alt="icon-cifrão" />
                    <p style="color: #FFF; font-size: 26px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block; margin: 30px auto; text-align: center; text-transform: uppercase;"
                      class="subtitle-body">LOREM IPSUM</p>
                    <img
                      src="https://crmcontent.betconstruct.com/24080914103200002187501150022211300000000000000089176.png"
                      style="display: block; margin: 0 auto; width: 100%;" alt="icon-cifrão" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>`,
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "html",
    html: `<tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 auto 40px auto;"
                class="margin-containers">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0"
                      style="width: 87%;margin: 0 auto 30px auto; padding: 30px; border: 1px solid #5198FB; border-radius: 32px 12px;"
                      class="margin-containers">
                      <tr>
                        <td style="width: 10%;">
                          <img
                            src="https://crmcontent.betconstruct.com/24082913313613002187501150023061900000000000000089176.png"
                            style="display: block;" alt="icon-proximos-passos" class="icon-proximos-passos" />
                        </td>
                        <td style="padding-left: 20px;">
                          <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block;"
                            class="text-body">Para garantir que você tenha tudo o que precisa, oferecemos um gerente
                            dedicado em horário comercial, pronto para apoiar você em cada passo.</p>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0"
                      style="width: 87%;margin: 0 auto 30px auto; padding: 30px; border: 1px solid #5198FB; border-radius: 32px 12px;"
                      class="margin-containers">
                      <tr>
                        <td style="width: 10%;">
                          <img
                            src="https://crmcontent.betconstruct.com/24082913323231102187501150023061900000000000000089176.png"
                            style="display: block;" alt="icon-proximos-passos" class="icon-proximos-passos" />
                        </td>
                        <td style="padding-left: 20px;">
                          <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block;"
                            class="text-body">Acesso a ferramentas incríveis como nossa sala de sinais, conta demo, material de divulgação e muito mais para engajar e conquistar seus clientes.</p>
                        </td>
                      </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0"
                      style="width: 87%;margin: 0 auto 30px auto; padding: 30px; border: 1px solid #5198FB; border-radius: 32px 12px;"
                      class="margin-containers">
                      <tr>
                        <td style="width: 10%;">
                          <img
                            src="https://crmcontent.betconstruct.com/24082913331738502187501150023061900000000000000089176.png"
                            style="display: block;" alt="icon-proximos-passos" class="icon-proximos-passos" />
                        </td>
                        <td style="padding-left: 20px;">
                          <p style="color: #FFF; font-size: 16px; font-family: Montserrat; font-style: normal;font-weight: normal;  display: block;"
                            class="text-body">Acesso ao nosso aplicativo de sinais, que é super avançado e oferece uma visão detalhada de todos os dados de desempenho para otimizar suas estratégias.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`,
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "image",
    url: "https://crmcontent.betconstruct.com/24080914095410102187501150022211300000000000000089176.png",
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "image",
    url: "https://crmcontent.betconstruct.com/24080914103200002187501150022211300000000000000089176.png",
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "image",
    url: "https://crmcontent.betconstruct.com/24082913313613002187501150023061900000000000000089176.png",
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "image",
    url: "https://crmcontent.betconstruct.com/24082913331738502187501150023061900000000000000089176.png",
    pattern: "playpix",
    color: "#5198FB",
  },
  {
    type: "image",
    url: "https://crmcontent.betconstruct.com/24082913313613002187501150023061900000000000000089176.png",
    pattern: "playpix",
    color: "#5198FB",
  },
 
];

export const iframeConfig = `

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap" rel="stylesheet">




<style>

  ::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
  border-radius: 10px !important;
  background-color: transparent !important;
  display: none !important
}

::-webkit-scrollbar-track {
  border-radius: 10px !important;
  background-color: transparent !important;
  margin: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  background: #cccc !important;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e1e1e !important;
  border-radius: 10px !important;
  cursor: pointer !important;
}
::-webkit-scrollbar-corner {
  display: none;
}


body{
width: 100%;
heigth: 100%;
}

</style>


`;
