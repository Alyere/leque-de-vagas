import MuralDeVagas from "@/components/MuralDeVagas";
import { vagas } from "@/data/vagas";

export default function ListagemVagas() {
  return <MuralDeVagas vagas={vagas} />;
}