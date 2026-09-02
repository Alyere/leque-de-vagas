import { vagas } from "@/data/vagas";
import MuralDeVagas from "@/components/MuralDeVagas";

export default function ListagemVagas() {
  console.log("[servidor] montando a listagem");

  return <MuralDeVagas vagas={vagas} />;
}