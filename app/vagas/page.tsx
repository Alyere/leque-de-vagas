import Link from "next/link";
import { vagas } from "@/data/vagas";

export default function ListagemVagas() {
  return (
    <ul>
      {vagas.map((vaga) => (
        <li key={vaga.id}>
          <Link href={`/vagas/${vaga.id}`}>{vaga.titulo}</Link>
          {" — "}
          <Link href={`/empresas/${vaga.empresaSlug}`}>{vaga.empresa}</Link>
        </li>
      ))}
    </ul>
  );
}
