"use client";

import { useState } from "react";

type DescricaoDaVagaProps = {
  texto: string;
};

export default function DescricaoDaVaga({ texto }: DescricaoDaVagaProps) {
  const [expandido, setExpandido] = useState(false);
  const limite = 250;
  const textoLongo = texto.length > limite;

  const textoExibido =
    !expandido && textoLongo ? `${texto.slice(0, limite)}...` : texto;

  return (
    <div style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
      <p>{textoExibido}</p>
      {textoLongo && (
        <button
          onClick={() => setExpandido(!expandido)}
          style={{ 
            marginTop: "12px", 
            background: "none", 
            border: "none", 
            color: "var(--pink-light)", 
            cursor: "pointer", 
            fontWeight: 600,
            textDecoration: "underline"
          }}
        >
          {expandido ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
}