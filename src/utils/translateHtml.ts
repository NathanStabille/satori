import axios from 'axios';

const authKey = process.env.DEEPL_API_KEY

const htmlContent = `<!-- Comentário que não deve ser traduzido -->
       <!-- Título  -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" style="width: 87%; margin: 0 auto;">
                <tr>
                  <td>
                    <h1
                      style="color: #FFF; font-size: 36px; font-family: Gabarito; font-style: normal;font-weight: bold;  display: block; margin: 30px 0 40px 0; max-width: 520px; line-height: 40px;"
                      class="title-body">¡Desafía a los mejores en Drops & Wins de Dupoc!</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Título  -->
`;

axios.post('https://api-free.deepl.com/v2/translate', {
  text:  [`${htmlContent}`],
  target_lang: "PT",
  tag_handling: "html"
}, {
  headers: {
    'Authorization': `DeepL-Auth-Key ${authKey}`,
    'Content-Type': 'application/json'
  }
}).then((doc)=>{

  const result = doc.data.translations[0].text
  console.log(result)
}).catch((err)=> {
  console.log(err)
});
