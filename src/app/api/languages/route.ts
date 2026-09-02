import axios from "axios";
import { NextResponse } from "next/server";

const authKey = process.env.DEEPL_API_KEY;

export async function GET() {
  if (!authKey) {
    return NextResponse.json(
      { error: "Serviço de tradução não configurado" },
      { status: 500 },
    );
  }

  try {
    const response = await axios.get(
      "https://api-free.deepl.com/v2/languages",
      {
        params: { type: "target" },
        headers: { Authorization: `DeepL-Auth-Key ${authKey}` },
      },
    );

    
    return NextResponse.json({ languages: response.data });
  } catch (error) {
    console.warn("Erro ao carregar idiomas do DeepL:", error);
    return NextResponse.json(
      { error: "Não foi possível carregar os idiomas" },
      { status: 502 },
    );
  }
}
