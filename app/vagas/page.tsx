import Link from "next/link";
import { vagas } from "@/data/vagas";

export default function ListagemVagas() {
  return (
    <ul className="vagas-lista">
      {vagas.map((vaga) => (
        <li key={vaga.id} className="vaga-item">
          <Link href={`/vagas/${vaga.id}`}>{vaga.titulo}</Link>
          <span className="vaga-separador"> — </span>
          <Link href={`/empresas/${vaga.empresaSlug}`}>{vaga.empresa}</Link>
        </li>
      ))}
    </ul>
  );
}