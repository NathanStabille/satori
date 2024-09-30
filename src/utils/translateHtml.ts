// utils/translateHtml.ts
export const translateHtml = async (htmlContent: string, target_lang: string): Promise<string | null> => {
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        htmlContent,
        target_lang,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao traduzir o conteúdo');
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
};
