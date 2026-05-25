import { useState } from "react";

export const useCopyToClipboard = (value: string) => {
  const [wasCopied, setWasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setWasCopied(true);
        setTimeout(() => {
          setWasCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o texto: ", err);
      });
  };

  return { wasCopied, handleCopy };
};
