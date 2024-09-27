// pages/api/translate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Text and target language are required.' });
  }

  try {
    // Configuração da URL e dos headers para a chamada da API do DeepL
    const response = await axios.post('https://api-free.deepl.com/v2/translate', {
      text: [text], // Envia o texto como array
      target_lang: targetLang,
    }, {
      headers: {
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Acessa o texto traduzido da resposta da API
    const translatedText = response.data.translations[0].text;
    res.status(200).json({ translatedText });
  } catch (error) {
    console.error('Translation failed:', error);
    res.status(500).json({ error: 'Translation failed.' });
  }
}
