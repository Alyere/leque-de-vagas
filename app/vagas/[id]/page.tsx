import { notFound } from "next/navigation";

type Vaga = {
  id: string;
  titulo: string;
};

const vagas: Vaga[] = [
  { id: "1", titulo: "Desenvolvedor Front-end Júnior" },
  { id: "2", titulo: "Desenvolvedor Back-end Júnior" },
  { id: "3", titulo: "Estágio em Desenvolvimento" },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetalheVaga({ params }: PageProps) {
  const { id } = await params;

  const vaga = vagas.find((vaga) => vaga.id === id);

import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

export default async function PaginaDaVaga({
  params,
}: PageProps<"/vagas/[id]">) {
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);
     main

  if (!vaga) {
    notFound();
  }

  return (
  feature/not-found-vaga
    <main>
      <h1>{vaga.titulo}</h1>
      <p>ID da vaga: {vaga.id}</p>
    </main>
  );
}

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
main
 main
