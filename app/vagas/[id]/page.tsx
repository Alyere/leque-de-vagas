import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

export default async function PaginaDaVaga({
  params,
}: PageProps<"/vagas/[id]">) {
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);

  if (!vaga) {
    notFound();
  }

  return (
    <article>
      <h2>{vaga.titulo}</h2>
      <p>
        <Link href={`/empresas/${vaga.empresaSlug}`}>{vaga.empresa}</Link>
      </p>
      <p>
        {vaga.area} · {vaga.senioridade} · {vaga.local}
      </p>
      <p>{vaga.descricao}</p>
    </article>
  );
}

// A pasta [id] cria a rota dinâmica. Ou seja, por exemplo: /vagas/1, /vagas/2