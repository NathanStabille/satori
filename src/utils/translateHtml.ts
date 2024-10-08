// utils/translateHtml.ts
export const translateHtml = async (
  htmlContent: string,
  target_lang: string,
): Promise<{ translatedText: string } | { error: string }> => {
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ htmlContent, target_lang }),
    });

    if (!response.ok) {
      throw new Error("Erro ao traduzir o conteúdo");
    }

    const data = await response.json();
    return { translatedText: data.translatedText };
  } catch (error: unknown) {
    console.error("Erro:", error);

    if (error instanceof Error) {
      return { error: error.message };
    }

    return { error: "Ocorreu um erro desconhecido" };
  }
};
