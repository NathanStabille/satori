import { NextResponse } from "next/server";
import axios from "axios";

const authKey = process.env.DEEPL_API_KEY;

export async function POST(request: Request) {
  try {
    if (!authKey) {
      return NextResponse.json(
        { error: "Serviço de tradução não configurado" },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("htmlContent" in body) ||
      !("target_lang" in body) ||
      typeof body.htmlContent !== "string" ||
      typeof body.target_lang !== "string" ||
      !body.htmlContent.trim() ||
      !body.target_lang.trim()
    ) {
      return NextResponse.json(
        { error: "HTML e idioma de destino são obrigatórios" },
        { status: 400 },
      );
    }

    const { htmlContent, target_lang } = body;
    const targetLanguage = target_lang.trim().toUpperCase();
    const sourceLanguageMatch = htmlContent.match(
      /<html\b[^>]*\blang=["']?([a-z]{2,}(?:-[a-z]{2,})?)/i,
    );
    const sourceLanguage = sourceLanguageMatch?.[1].split("-")[0].toUpperCase();

    const response = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      {
        text: [htmlContent],
        ...(sourceLanguage ? { source_lang: sourceLanguage } : {}),
        target_lang: targetLanguage,
        tag_handling: "html",
      },
      {
        headers: {
          Authorization: `DeepL-Auth-Key ${authKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    const result = response.data.translations[0].text;
    return NextResponse.json({ translatedText: result });
  } catch (error) {
    console.warn("Erro ao chamar API do DeepL:", error);
    return NextResponse.json(
      { error: "Erro ao traduzir o conteúdo" },
      { status: 500 },
    );
  }
}
