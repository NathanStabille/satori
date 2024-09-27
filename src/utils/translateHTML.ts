// utils/translateHTML.ts
import { parseDocument } from 'htmlparser2';
import { DomUtils } from 'domhandler';
import { getElementsByTagType, getText, getOuterHTML } from 'domutils';

// Função para extrair e traduzir o texto do HTML
export const extractTextNodes = (html: string) => {
  // Faz o parse do HTML para um documento DOM manipulável
  const document = parseDocument(html);
  const textNodes = getElementsByTagType('text', document);

  // Extrai os textos dos nós
  const texts = textNodes.map((node) => getText(node)).filter((text) => text.trim() !== '');

  return { document, texts, textNodes };
};

// Função para substituir textos traduzidos de volta no DOM
export const replaceTextNodes = (document: any, textNodes: any[], translatedTexts: string[]) => {
  // Substitui os textos originais pelos traduzidos
  textNodes.forEach((node, index) => {
    node.data = translatedTexts[index];
  });

  // Retorna o HTML com os textos traduzidos
  return getOuterHTML(document);
};
