import { NextResponse } from 'next/server';
import axios from 'axios';

const authKey = process.env.DEEPL_API_KEY;

export async function POST(request: Request) {
  try {
    const { htmlContent, target_lang } = await request.json();

    const response = await axios.post(
      'https://api-free.deepl.com/v2/translate',
      {
        text: [htmlContent],
        target_lang: target_lang.toUpperCase(),
        tag_handling: 'html',
      },
      {
        headers: {
          Authorization: `DeepL-Auth-Key ${authKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data.translations[0].text;
    return NextResponse.json({ translatedText: result });

  } catch (error) {
    console.error('Erro ao chamar API do DeepL:', error);
    return NextResponse.json({ error: 'Erro ao traduzir o conteúdo' }, { status: 500 });
  }
}
