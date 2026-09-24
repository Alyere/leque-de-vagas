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
      style={{
        padding: "10px 20px",
        borderRadius: "999px",
        background: copiado ? "rgba(255, 20, 147, 0.2)" : "linear-gradient(135deg, var(--pink-dark), var(--pink))",
        color: "white",
        fontWeight: 600,
        border: copiado ? "1px solid var(--pink)" : "none",
        cursor: "pointer",
        boxShadow: copiado ? "none" : "0 0 12px rgba(255, 20, 147, 0.2)",
        transition: "all 0.2s ease"
      }}
    >
      {copiado ? "✓ Link copiado!" : "Copiar link da vaga"}
    </button>
  );
}