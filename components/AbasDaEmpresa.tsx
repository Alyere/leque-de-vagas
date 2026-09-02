"use client";

import { useState } from "react";
import Link from "next/link";

type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

type AbasDaEmpresaProps = {
  sobre: string;
  vagas: Vaga[];
};

export default function AbasDaEmpresa({
  sobre,
  vagas,
}: AbasDaEmpresaProps) {
  const [aba, setAba] = useState("sobre");

  return (
    <section className="abas-empresa">
      <div className="abas-botoes">
        <button
          onClick={() => setAba("sobre")}
          className={aba === "sobre" ? "ativa" : ""}
        >
          Sobre
        </button>

        <button
          onClick={() => setAba("vagas")}
          className={aba === "vagas" ? "ativa" : ""}
        >
          Vagas ({vagas.length})
        </button>
      </div>

      {aba === "sobre" && (
        <section className="aba-conteudo">
          <h2>Sobre</h2>

          <p>{sobre}</p>
        </section>
      )}

      {aba === "vagas" && (
        <section className="aba-conteudo">
          <h2>Vagas</h2>

          <div className="vagas-empresa">
            {vagas.map((vaga) => (
              <article className="vaga-empresa-card" key={vaga.id}>
                <h3>
                  <Link href={`/vagas/${vaga.id}`}>
                    {vaga.titulo}
                  </Link>
                </h3>

                <p>
                  {vaga.area} · {vaga.senioridade} · {vaga.local}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}