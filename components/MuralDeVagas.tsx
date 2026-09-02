"use client";

import { useState } from "react";
import { Vaga } from "@/data/vagas";
import Filtros from "./Filtros";

type MuralDeVagasProps = {
  vagas: Vaga[];
};

export default function MuralDeVagas({ vagas }: MuralDeVagasProps) {
  const [busca, setBusca] = useState("");
  const [area, setArea] = useState("Todas");

  const areas = ["Todas", ...new Set(vagas.map((vaga) => vaga.area))];

  const visiveis = vagas.filter((vaga) => {
    const correspondeBusca =
      vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.empresa.toLowerCase().includes(busca.toLowerCase());

    const correspondeArea = area === "Todas" || vaga.area === area;

    return correspondeBusca && correspondeArea;
  });

  const aceitamIniciante = visiveis.filter(
    (vaga) => vaga.aceitaIniciante === true
  ).length;

  return (
    <div>
      <h1>Vagas</h1>

      <Filtros
        busca={busca}
        aoMudarBusca={setBusca}
        area={area}
        aoMudarArea={setArea}
        areas={areas}
      />

      <p>
        {visiveis.length} de {vagas.length} vagas
      </p>

      <p>{aceitamIniciante} vagas aceitam iniciantes</p>

      {visiveis.length === 0 && <p>Nenhuma vaga encontrada.</p>}

      <div>
        {visiveis.map((vaga) => (
          <div key={vaga.id}>
            <h2>{vaga.titulo}</h2>
            <p>{vaga.empresa}</p>
            <p>{vaga.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}