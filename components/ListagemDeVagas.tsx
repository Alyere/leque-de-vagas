import {
  listarVagas,
  buscarUltimaAtualizacaoVagas,
} from "@/lib/api";

import MuralDeVagas from "@/components/MuralDeVagas";

export default async function Page() {
  const [vagas, ultimaAtualizacao] = await Promise.all([
    listarVagas(),
    buscarUltimaAtualizacaoVagas(),
  ]);

  return (
    <MuralDeVagas
      vagas={vagas}
      ultimaAtualizacao={ultimaAtualizacao}
    />
  );
}