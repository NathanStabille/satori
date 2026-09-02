import { NextResponse } from "next/server";
import axios from "axios";

const authKey = process.env.DEEPL_API_KEY;
const MAX_HTML_LENGTH = 100_000;

export async function POST(request: Request) {
  try {
    if (!authKey) {
      return NextResponse.json(
        { error: "Serviço de tradução não configurado" },
        { status: 500 },
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "O corpo da requisição precisa ser um JSON válido" },
        { status: 400 },
      );
    }

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

    if (body.htmlContent.length > MAX_HTML_LENGTH) {
      return NextResponse.json(
        { error: "O HTML excede o limite de 100.000 caracteres" },
        { status: 413 },
      );
    }

    const { htmlContent, target_lang } = body;
    const targetLanguage = target_lang.trim().toUpperCase();

    if (!/^[A-Z]{2,3}(?:-[A-Z0-9]{2,8})?$/.test(targetLanguage)) {
      return NextResponse.json(
        { error: "Código de idioma de destino inválido" },
        { status: 400 },
      );
    }
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

    const result = response.data?.translations?.[0]?.text;

    if (typeof result !== "string") {
      throw new Error("Resposta inválida do serviço de tradução");
    }

    return NextResponse.json({ translatedText: result });
  } catch (error) {
    console.warn("Erro ao chamar API do DeepL:", error);
    return NextResponse.json(
      { error: "O serviço de tradução não respondeu corretamente" },
      { status: 502 },
    );
  }
}
