"use client";

import { useState } from "react";

export default function BotaoCopiarLink() {
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <button
      onClick={handleCopiar}
      className="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors"
    >
      {copiado ? "✓ Link copiado!" : "Copiar link da vaga"}
    </button>
  );
}