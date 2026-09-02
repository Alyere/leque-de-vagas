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
    <div className="text-neutral-700 leading-relaxed">
      <p>{textoExibido}</p>
      {textoLongo && (
        <button
          onClick={() => setExpandido(!expandido)}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 underline block"
        >
          {expandido ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
}