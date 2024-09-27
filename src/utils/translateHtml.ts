import cheerio from 'cheerio';
import axios from 'axios';

// Sua chave de autenticação da API do DeepL
const authKey = 'YOUR_AUTH_KEY';  // Substitua pela sua chave da API do DeepL

// HTML de exemplo
const htmlContent = `
<!-- Comentário que não deve ser traduzido -->
<html>
<head><title>Minha Página</title></head>
<body>
    <h1>Bem-vindo ao nosso site</h1>
    <p>Esta é uma página de exemplo</p>
</body>
</html>
`;

// Função para traduzir o texto usando a API do DeepL
const translateText = async (text: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api-free.deepl.com/v2/translate',
      new URLSearchParams({
        auth_key: authKey,
        text: text,
        target_lang: 'EN-US',
      })
    );
    return response.data.translations[0].text;
  } catch (error) {
    console.error('Erro ao traduzir o texto:', error);
    return text;  // Retorna o texto original em caso de erro
  }
};

// Função principal para processar e traduzir o HTML
const processHtml = async (html: string): Promise<string> => {
  const $ = cheerio.load(html);

  // Itera por todos os textos, excluindo comentários
  const textNodes = $('*')
    .contents()
    .filter(function () {
      return this.type === 'text' && this.nodeType !== 8;  // NodeType 8 é para comentários
    });

  // Traduz cada texto de forma assíncrona
  for (const node of textNodes) {
    const text = $(node).text();
    const translatedText = await translateText(text);
    $(node).replaceWith(translatedText);
  }

  // Retorna o HTML processado sem tags extras
  return $('body').html() || '';
};

// Execução da função para processar o HTML
processHtml(htmlContent)
  .then((translatedHtml) => {
    console.log('HTML traduzido:', translatedHtml);
  })
  .catch((error) => {
    console.error('Erro ao processar o HTML:', error);
  });
